package com.content.controller;

import com.content.model.request.CommentRequest;
import com.content.model.response.CommentListResponse;
import com.content.model.response.CommentResponse;
import com.content.service.CommentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RequestMapping(path = "/events/${api.version}/{contentId}/comments", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
@Slf4j
public class CommentController {

    private final CommentService commentService;

    @PostMapping
    public ResponseEntity<CommentResponse> insertComment(@RequestBody CommentRequest commentRequest) {
        CommentResponse CommentResponse = commentService.insertComment(commentRequest);
        return ResponseEntity.ok(CommentResponse);
    }

    @GetMapping
    public ResponseEntity<Slice<CommentListResponse>> getCommentsByContentId(
            @PathVariable Long contentId,
            @PageableDefault(
                    size = 10,
//                    page = 0,
                    sort = "createdAt",
                    direction = Sort.Direction.DESC
            ) Pageable pageable
    ) {
        return ResponseEntity.ok(commentService.getCommentsByContentId(contentId, pageable));
    }

}
