package org.example.backend.repos;

import org.example.backend.jpas.RoomJPA;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomRepository extends JpaRepository<RoomJPA, Integer> {
    List<RoomJPA> findRoomJPAByHotelId(int hotelId);
}
