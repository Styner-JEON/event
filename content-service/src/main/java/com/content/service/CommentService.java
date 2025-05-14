package com.content.service;

import com.content.mapper.CommentMapper;
import com.content.mapper.EventMapper;
import com.content.model.entity.CommentEntity;
import com.content.model.request.CommentRequest;
import com.content.model.response.CommentListResponse;
import com.content.model.response.CommentResponse;
import com.content.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final EventMapper eventMapper;

    private final CommentMapper commentMapper;

    private final CommentRepository commentRepository;

    @Transactional
    public CommentResponse insertComment(CommentRequest commentRequest) {
        CommentEntity commentEntity = commentMapper.toCommentEntity(commentRequest);
        LocalDateTime now = LocalDateTime.now();
        commentEntity.setCreatedAt(now);
        commentEntity.setUpdatedAt(now);
        CommentEntity savedCommentEntity = commentRepository.save(commentEntity);
        return commentMapper.toCommentResponse(savedCommentEntity);
    }

    @Transactional(readOnly = true)
    public Slice<CommentListResponse> getCommentsByContentId(Long contentId, Pageable pageable) {
        return commentRepository.findByContentIdOrderByCreatedAtDesc(contentId, pageable).map(commentMapper::toCommentListDto);
    }

}
