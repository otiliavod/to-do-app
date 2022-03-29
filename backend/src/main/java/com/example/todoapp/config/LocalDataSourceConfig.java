package com.example.todoapp.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class LocalDataSourceConfig {
    private String username;
    private String password;
    private String url;

    public LocalDataSourceConfig(
            @Value("${local.datasource.username}") String username,
            @Value("${local.datasource.password}") String password,
            @Value("${local.datasource.url}") String url){
        this.username = username;
        this.password = password;
        this.url = url;
    }
    @Bean
    public DataSource dataSource() {
        org.apache.tomcat.jdbc.pool.DataSource dataSource = new org.apache.tomcat.jdbc.pool.DataSource();
        dataSource.setDriverClassName("org.postgresql.Driver");
        dataSource.setUsername(username);
        dataSource.setPassword(password);
        dataSource.setUrl(url);
        dataSource.setConnectionProperties("defaultRowPrefetch=500");
        dataSource.setAccessToUnderlyingConnectionAllowed(true);
        dataSource.setInitialSize(1);
        dataSource.setMaxActive(20);
        dataSource.setMaxIdle(20);
        dataSource.setMaxWait(10000);
        dataSource.setTestOnBorrow(true);
        dataSource.setTestOnConnect(true);
        dataSource.setTestWhileIdle(true);
        dataSource.setTimeBetweenEvictionRunsMillis(300000);
        dataSource.setMinEvictableIdleTimeMillis(600000);
        dataSource.setRemoveAbandoned(true);
        dataSource.setRemoveAbandonedTimeout(300);
        dataSource.setLogAbandoned(true);
        return dataSource;

    }
}
