package com.bridge.model.eventhttpresponse.ok;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

import java.util.List;

@Getter
public class Items {

    @JsonProperty("item")
    private List<Item> itemList;

}
