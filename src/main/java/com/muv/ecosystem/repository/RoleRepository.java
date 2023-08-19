package com.muv.ecosystem.repository;

import com.muv.ecosystem.entity.Role;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

public interface RoleRepository extends Repository<Role, Integer> {

    @Query("SELECT role FROM Role role WHERE role.name = :name")
    Role findByName(String name);

}
