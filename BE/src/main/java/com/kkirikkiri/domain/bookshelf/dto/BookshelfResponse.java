package com.kkirikkiri.domain.bookshelf.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookshelfResponse {

    private Long storyId; // story PK
    private String title; // 제목
    private String author; // 작가 이름
    private String imageURL; // 썸네일이미지
    private String summery; // 요약
}