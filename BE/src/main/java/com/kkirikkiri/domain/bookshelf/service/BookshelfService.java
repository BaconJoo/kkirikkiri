package com.kkirikkiri.domain.bookshelf.service;

import com.kkirikkiri.domain.book.dto.StoryResponse;
import com.kkirikkiri.domain.book.entity.Content;
import com.kkirikkiri.domain.book.entity.Story;
import com.kkirikkiri.domain.book.repository.ContentRepository;
import com.kkirikkiri.domain.book.repository.StoryRepository;
import com.kkirikkiri.domain.bookshelf.dto.BookshelfRequest;
import com.kkirikkiri.domain.bookshelf.dto.BookshelfResponse;
import com.kkirikkiri.domain.bookshelf.entity.Bookshelf;
import com.kkirikkiri.domain.bookshelf.repository.BookshelfRepository;
import com.kkirikkiri.domain.member.entity.Member;
import com.kkirikkiri.domain.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.awt.print.Book;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RequiredArgsConstructor
@Service
public class BookshelfService {

    private final BookshelfRepository bookshelfRepository;
    private final StoryRepository storyRepository;
    private final MemberRepository memberRepository;
    private final ContentRepository contentRepository;

    // 동화책 전체 조회: 내가 만든 동화책 + 다른 사람이 만든 동화책
    public List<BookshelfResponse> getAllStories(String loginId) {

        Member member = memberRepository.findByLoginId(loginId)
                .orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다."));

        List<Story> stories = storyRepository.findAllByMemberId(member.getId());

        // 내가 만든 책
        List<BookshelfResponse> myBooks = stories.stream()
            .map(story -> BookshelfResponse.builder()
                .storyId(story.getId())
                .title(story.getTitle())
                .author(member.getNickname())
                .imageURL(contentRepository.findByStoryIdAndLineId(story.getId(), 1).getImageUrl())
                .summery(story.getSummary())
                .build())
            .toList();

        // 다른 사람이 만든 책
        List<Bookshelf> books = bookshelfRepository.findByMemberId(member.getId());

        List<BookshelfResponse> otherBooks = books.stream()
            .map(bookshelf -> BookshelfResponse.builder()
                .storyId(bookshelf.getStory().getId())
                .title(bookshelf.getStory().getTitle())
                .author(bookshelf.getStory().getMember().getNickname())
                .imageURL(contentRepository.findByStoryIdAndLineId(bookshelf.getStory().getId(), 1).getImageUrl())
                .summery(bookshelf.getStory().getSummary())
                .build())
            .toList();

        return Stream.concat(myBooks.stream(), otherBooks.stream())
            .collect(Collectors.toList());
    }

    // 책장에 동화책 추가
    public String createBookshelf(BookshelfRequest bookshelfRequest, String loginId) {
        Member member = memberRepository.findByLoginId(loginId)
                .orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다."));
        Story story = storyRepository.findById(bookshelfRequest.getStoryId())
            .orElseThrow(() -> new IllegalArgumentException("해당 스토리가 없습니다."));

        List<Bookshelf> findBookshelf = bookshelfRepository.findByMemberIdAndStoryId(member.getId(), story.getId());
        if (findBookshelf.size() == 1) return "이미 책장에 추가되어있어요!!";
        if (story.getMember().getId() == member.getId()) return "자신의 이야기는 추가할 수 없어요!!";

        Bookshelf bookshelf = Bookshelf.builder()
                .member(member)
                .story(story)
                .build();

        bookshelfRepository.save(bookshelf);

        return "책장에 추가되었어요!!";
    }

}
