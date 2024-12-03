package com.fst.taskmanager.service;

import com.fst.taskmanager.exception.UserNotFoundException;
import com.fst.taskmanager.model.User;
import com.fst.taskmanager.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public User save(User user) {
        return userRepository.save(user);
    }

    public User updateUser(Long id, User user) {
        Optional<User> existingUserOpt = userRepository.findById(id);
        if (!existingUserOpt.isPresent()) {
            throw new UserNotFoundException("Utilisateur non trouvé avec l'ID " + id);
        } 
        User existingUser = existingUserOpt.get();
        existingUser.setUsername(user.getUsername());
        existingUser.setPassword(user.getPassword());
        return userRepository.save(existingUser);
        
    }

    @Transactional
    public void delete(Long id) {
        userRepository.deleteById(id);
    }
}
