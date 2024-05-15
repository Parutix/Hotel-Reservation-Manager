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

    private int roomNumber;
    private int type;
    private double price;
    private boolean isAvailable;

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

    public int getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(int roomNumber) {
        this.roomNumber = roomNumber;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void setAvailable(boolean available) {
        isAvailable = available;
    }
}
