package org.example.backend.services;

import org.example.backend.jpas.RoomJPA;
import org.example.backend.repos.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.view.groovy.GroovyMarkupConfig;

import java.util.List;

@Service
public class RoomService {
    private final RoomRepository roomRepository;

    @Autowired
    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    public List<RoomJPA> getHotelRooms(int hotelId) {
        return roomRepository.findRoomJPAByHotelId(hotelId);
    }
}
