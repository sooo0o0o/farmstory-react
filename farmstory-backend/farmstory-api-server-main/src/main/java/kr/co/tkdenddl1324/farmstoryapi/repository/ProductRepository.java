package kr.co.tkdenddl1324.farmstoryapi.repository;

import kr.co.tkdenddl1324.farmstoryapi.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {



}
