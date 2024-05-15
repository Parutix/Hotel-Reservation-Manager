package org.example.backend.services;

import org.example.backend.jpas.HotelJPA;
import org.example.backend.repos.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HotelService {
    private final HotelRepository hotelRepository;

    @Autowired
    public HotelService(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    public List<HotelJPA> calculateDistance(double userLatitude, double userLongitude, int radius) {
        final int R = 6371; // raza pamantului ( gasit pe net :D )
        return hotelRepository.findAll().stream()
                .filter(hotel -> {
                    double latDistance = Math.toRadians(hotel.getLatitude() - userLatitude);
                    double lonDistance = Math.toRadians(hotel.getLongitude() - userLongitude);
                    double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                            + Math.cos(Math.toRadians(userLatitude)) * Math.cos(Math.toRadians(hotel.getLatitude()))
                            * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
                    double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    double distance = R * c;
                    return distance <= radius;
                })
                .collect(Collectors.toList());
    }
}
