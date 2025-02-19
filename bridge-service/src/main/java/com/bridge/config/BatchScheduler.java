package com.bridge.config;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

@Configuration
@EnableScheduling
@RequiredArgsConstructor
@Slf4j
public class BatchScheduler {

    private final JobLauncher jobLauncher;

    private final Job eventFetchingAndSendingJob;

    /**
     * 매일 새벽 4시에 Event 데이터를 가져와 Kafka로 전송하는 Job을 실행함
     */
    @Scheduled(cron = "0 * * * * ?")
//        @Scheduled(cron = "0 0 4 * * ?")
    public void scheduleEventFetchingAndSendingJob() {
        try {
            ZonedDateTime nowKST = ZonedDateTime.now(ZoneId.of("Asia/Seoul"));
            String formattedTime = nowKST.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

            JobParameters jobParameters = new JobParametersBuilder()
                    .addString("koreanTime", formattedTime)
                    .toJobParameters();

            jobLauncher.run(eventFetchingAndSendingJob, jobParameters);
        } catch (Exception e) {
            log.error("Failed to run eventFetchingAndSendingJob", e);
        }
    }

}


