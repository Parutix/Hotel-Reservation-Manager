package org.example.backend.controllers;
import org.example.backend.jpas.HotelJPA;
import org.example.backend.jpas.RoomJPA;
import org.example.backend.services.HotelService;
import org.example.backend.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hotels")
public class SearchController {
    private HotelService hotelService;
    private RoomService roomService;

    @Autowired
    public SearchController(HotelService hotelService, RoomService roomService) {
        this.hotelService = hotelService;
        this.roomService = roomService;
    }

    @GetMapping("/gethotels")
    public ResponseEntity<?> getHotels(@RequestParam double userLatitude,
                                       @RequestParam double userLongitude,
                                       @RequestParam int radius) {
        List<HotelJPA> hotels = hotelService.calculateDistance(userLatitude, userLongitude, radius);
        if (hotels.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No hotels found within the specified radius.");
        }
        return ResponseEntity.ok(hotels);
    }

    @GetMapping("/gethotelrooms")
    public ResponseEntity<?> getHotelRooms(@RequestParam int hotel_id) {
        List<RoomJPA> rooms = roomService.getHotelRooms(hotel_id);
        return ResponseEntity.ok(rooms);
    }

}
