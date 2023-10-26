package com.muv.ecosystem.repository;

import com.muv.ecosystem.entity.Appeal;
import com.muv.ecosystem.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AppealRepository extends JpaRepository<Appeal, Integer> {

    @Query("SELECT appeal FROM Appeal appeal WHERE appeal.user = :user")
    List<Appeal> findAllByUser(User user);

}
