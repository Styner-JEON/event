package com.content.service;

import com.content.exception.ImageProcessingException;
import com.content.model.dto.EventDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.io.IOException;
import java.nio.file.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class ImageService {

//    private final RestClient restClient;
//
//    @Value("${image.path}")
//    private String imagePath;
//
//    @Value("${image.file-name}")
//    private String fileName;
//
//    public void processImages(EventDto eventDto) {
//        if (eventDto == null) {
//            throw new ImageProcessingException("EventDto is null");
//        }
//
//        downloadAndSaveImage(eventDto, eventDto.getFirstImage(), false);
//        downloadAndSaveImage(eventDto, eventDto.getFirstImage2(), true);
//        log.info("Saved image: {}", eventDto.getContentId());
//    }
//
//    private void downloadAndSaveImage(EventDto eventDto, String imageUrl, boolean isThumbnail) {
//        Long contentId = eventDto.getContentId();
//        ResponseEntity<byte[]> response = restClient.get()
//                .uri(imageUrl)
//                .retrieve()
//                .toEntity(byte[].class);
//
//        if (response.getStatusCode().is2xxSuccessful() && response.getBody() != null) {
//            String contentType = response.getHeaders().getContentType() != null ?
//                    response.getHeaders().getContentType().toString() : "application/octet-stream";
//
//            String extension = getFileExtension(contentType);
//            if (extension == null) {
//                log.info("Unknown content type: {}. Skipping image {}", contentType, imageUrl);
//                return;
//            }
//
//            String filename = contentId + fileName + (isThumbnail ? "_tn" : "") + "." + extension;
//            Path savePath = Paths.get(imagePath, filename);
//
//            try {
//                Files.createDirectories(savePath.getParent());
//                // 파일이 이미 존재하면 덮어씀
//                Files.write(savePath, response.getBody(), StandardOpenOption.CREATE, StandardOpenOption.TRUNCATE_EXISTING);
//            } catch (IOException e) {
//                throw new ImageProcessingException(String.format("Failed to save image: %s", contentId));
//            }
//        } else {
//            throw new ImageProcessingException(String.format("Failed to download image: %s. Response status: %s", contentId, response.getStatusCode()));
//        }
//    }
//
//    private String getFileExtension(String contentType) {
//        return switch (contentType) {
//            case "image/jpeg" -> "jpg";
//            case "image/jpg"  -> "jpg";
//            case "image/png"  -> "png";
//            case "image/gif"  -> "gif";
//            case "image/webp" -> "webp";
//            default -> null;
//        };
//    }

}
