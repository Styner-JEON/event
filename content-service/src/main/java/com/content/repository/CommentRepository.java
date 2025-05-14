package com.content.repository;

import com.content.model.entity.CommentEntity;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<CommentEntity, Long> {

    Slice<CommentEntity> findByContentIdOrderByCreatedAtDesc(Long contentId, Pageable pageable);

}
