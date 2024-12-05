package com.fst.taskmanager.service;

import com.fst.taskmanager.model.User;
import com.fst.taskmanager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // Méthode pour l'authentification
    public boolean authenticate(User user) {
        User foundUser = userRepository.findByUsername(user.getUsername());
        if (foundUser != null && passwordEncoder.matches(user.getPassword(), foundUser.getPassword())) {
            return true;
        }
        return false;
    }

    // Méthode pour l'inscription
    // Méthode pour l'inscription
public boolean register(User user) {
    if (userRepository.existsByUsername(user.getUsername())) {
        return false; // Utilisateur déjà existant
    }
    // Cryptage du mot de passe avant l'enregistrement
    user.setPassword(passwordEncoder.encode(user.getPassword()));
    userRepository.save(user);
    return true;
}

}
