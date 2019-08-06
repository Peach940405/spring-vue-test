package com.choi.model.service;

import com.choi.model.dto.City;
import com.choi.model.repository.CityMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CityService {
    @Autowired
    CityMapper cityMapper;

    List<City> getAllUsers() {
        return cityMapper.selectAllUsers();
    }
}
