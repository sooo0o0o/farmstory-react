package kr.co.tkdenddl1324.farmstoryapi.repository;

import kr.co.tkdenddl1324.farmstoryapi.entity.Terms;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TermsRepository extends JpaRepository<Terms, Integer> {
}
