package com.zensar.crud.db;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zensar.crud.bean.Product;
@Repository
public interface ProductDAO extends JpaRepository<Product, Integer> {

}
