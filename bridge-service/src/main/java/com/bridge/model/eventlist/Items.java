package com.bridge.model.eventlist;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

import java.util.List;

@Getter
public class Items {

    @JsonProperty("item")
    private List<EventListItem> eventListItemList;

}
