package org.example.backend.jpas;

import jakarta.persistence.*;

@Entity
@Table(name = "rooms", uniqueConstraints = {
        @UniqueConstraint(columnNames = "id")
})
public class RoomJPA {
    @Id
    private int id;

    @ManyToOne
    @JoinColumn(name = "hotel_id", nullable = false)
    private HotelJPA hotel;

    private int room_number;
    private int room_type;
    private double price;
    private int is_available;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public HotelJPA getHotel() {
        return hotel;
    }

    public void setHotel(HotelJPA hotel) {
        this.hotel = hotel;
    }

    public int getRoom_number() {
        return room_number;
    }

    public void setRoom_number(int room_number) {
        this.room_number = room_number;
    }

    public int getRoom_type() {
        return room_type;
    }

    public void setRoom_type(int room_type) {
        this.room_type = room_type;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getIs_available() {
        return is_available;
    }

    public void setIs_available(int is_available) {
        this.is_available = is_available;
    }
}
