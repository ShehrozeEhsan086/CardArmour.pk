package com.comsats.cardarmourbackend.Repository;

import com.comsats.cardarmourbackend.model.VirtualCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.sql.Date;

public interface VirtualCardRepository extends JpaRepository<VirtualCard,Integer> {

    @Query(value="INSERT INTO \"CARDARMOUR\".\"Virtual Card\" (CARDID, CARDHOLDERNAME, \"card number\", CVC, EXPDATE) VALUES (?1,?2,?3,?4,?5)",nativeQuery = true)
    boolean addVirtualCard(int cardid, String cardholdername, String cardnumber, int cvc, Date expdate);

}
