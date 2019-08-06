package com.choi.model.repository;

import com.choi.model.dto.City;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CityMapper {
    City selectCityById(long id);
    List<City> selectAllUsers();


}
