package org.example.backend.repos;
import org.example.backend.jpas.HotelJPA;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelRepository extends JpaRepository<HotelJPA, Integer> {
    HotelJPA findById(int id);
}
