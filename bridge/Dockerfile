FROM openjdk:21
WORKDIR /myapp
ARG JAR_FILE=build/libs/bridge-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} event-server.jar
ENV TZ=Asia/Seoul
ENTRYPOINT ["java", "-jar", "event-server.jar"]

