package com.choi.model.dto;

import lombok.Data;
import org.apache.ibatis.type.Alias;

@Data
@Alias("city")
public class City {
    private String id;
    private String password;
    private String name;
}