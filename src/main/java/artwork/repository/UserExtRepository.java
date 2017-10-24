package artwork.repository;

import artwork.domain.UserExt;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import java.util.List;

/**
 * Spring Data JPA repository for the UserExt entity.
 */
@SuppressWarnings("unused")
@Repository
public interface UserExtRepository extends JpaRepository<UserExt, Long> {

    @Query("select user_ext from UserExt user_ext where user_ext.workingOn.login = ?#{principal.username}")
    List<UserExt> findByWorkingOnIsCurrentUser();

}
