package com.comsats.cardarmourbackend.Controller;

import com.comsats.cardarmourbackend.Repository.CustomerRepository;
import com.comsats.cardarmourbackend.Repository.UserRepository;
import com.comsats.cardarmourbackend.model.SystemUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class UserController {

    @Autowired
    private UserRepository userRepo;


    @PostMapping("/login")
    public SystemUser login(@RequestBody SystemUser user){

        try{
            SystemUser user1 = userRepo.findByUsernamePassword(user.getUsername(),user.getPassword());
            if(user1!=null){
                return user1;
            } else {
                return null;
            }
        } catch (Exception e){
            e.printStackTrace();
            return null;
        }

    }

}
