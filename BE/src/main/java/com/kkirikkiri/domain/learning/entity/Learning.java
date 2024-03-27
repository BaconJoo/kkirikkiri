package com.kkirikkiri.domain.learning.entity;

import com.kkirikkiri.domain.book.entity.Story;
import com.kkirikkiri.domain.member.entity.Member;
import com.kkirikkiri.domain.member.entity.enums.EnglishLevel;
import jakarta.persistence.*;
import lombok.*;

import static jakarta.persistence.EnumType.STRING;
import static jakarta.persistence.FetchType.LAZY;
import static jakarta.persistence.GenerationType.IDENTITY;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Learning {

    @Id
    private Long id;
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "story_id")
    private Story story;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @Column
    private Integer writingLineNo;

    @Column
    private Integer speakingLineNo;

    @Column
    private Integer writingCpltNo;

    @Column
    private Integer speakingCpltNo;




}
