package com.fst.taskmanager.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Autoriser les requêtes CORS pour toutes les méthodes de l'API
        registry.addMapping("/api/**") // Toutes les routes commençant par "/api"
                .allowedOrigins("http://localhost:4200")  // L'URL de votre frontend Angular
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Les méthodes autorisées
                .allowedHeaders("*");  // Autorise tous les en-têtes
    }
}
