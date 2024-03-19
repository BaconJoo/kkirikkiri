package com.kkirikkiri.domain.book.dto;

import com.kkirikkiri.domain.book.entity.enums.OpenState;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@RedisHash("book")
public class StoryResponse implements Serializable {

    @Id
    private Long id;
    private Long memberId;
    private String title;
    private OpenState openState;
    private List<ContentResponse> contents;
}
