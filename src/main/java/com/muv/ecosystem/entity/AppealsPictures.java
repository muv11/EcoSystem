package com.muv.ecosystem.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
@ToString
@Entity
@Table(name = "appeals_pictures", schema = "eco_system")
public class AppealsPictures {

    @EmbeddedId
    private AppealsPicturesPK appealsPicturesId;
    @MapsId("appealId")
    @ManyToOne
    @JoinColumn(name = "appeal_id", referencedColumnName = "id")
    private Appeal appeal;
    @MapsId("pictureId")
    @ManyToOne
    @JoinColumn(name = "picture_id", referencedColumnName = "id")
    private Picture picture;

}
