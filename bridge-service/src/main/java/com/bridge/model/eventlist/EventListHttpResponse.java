package com.bridge.model.eventlist;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter
public class EventListHttpResponse {

    @JsonProperty("response")
    private Response response;

}