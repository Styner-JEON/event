package com.auth.security;

import com.auth.model.entity.UserEntity;
import com.auth.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity userEntity = userRepository.findByUsername(username).orElseThrow(() ->
                new UsernameNotFoundException("Username " + username + " not found")
        );
        return new CustomUserDetails(userEntity);
    }

    public UserDetails loadUserByUserId(Long userId) {
        UserEntity userEntity = userRepository.findById(userId).orElseThrow(() ->
                new UsernameNotFoundException("User ID " + userId + " not found")
        );
        return new CustomUserDetails(userEntity);
    }

}
