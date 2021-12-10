package com.comsats.cardarmourbackend.Controller;

import com.comsats.cardarmourbackend.Repository.VirtualCardRepository;
import com.comsats.cardarmourbackend.model.VirtualCard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.Random;

@CrossOrigin("*")
@RestController
public class VirtualCardController {

    @Autowired
    VirtualCardRepository vcRepo;

    @PostMapping("/generateVirtualCard")
    public boolean addVirtualCard(@RequestParam String cardholdername,Date expdate){
        try{
            VirtualCard virtualCard = new VirtualCard();
            virtualCard.setCardid(generateId());
            virtualCard.setCardholdername(cardholdername);
            virtualCard.setCardNumber(generateCardNumber());
            virtualCard.setCvc(generatecvc());
            virtualCard.setExpdate(expdate);
            vcRepo.addVirtualCard(virtualCard.getCardid(),virtualCard.getCardholdername(),virtualCard.getCardNumber(),virtualCard.getCvc(),virtualCard.getExpdate());
        } catch(Exception e){
        }
        return true;
    }


    private int generateId(){
        Random rand = new Random();
        return rand.nextInt(10000000);
    }

    private int generatecvc(){
        Random rand = new Random();
        return rand.nextInt(1000);
    }

    private String generateCardNumber(){
        String cardNumber="";
        Random rand = new Random();
        for(int i = 0;i<4;i++){
            cardNumber += rand.nextInt(10000);
            if(i<3){
                cardNumber += "-";
            }
        }
        return cardNumber;
    }

}
