package com.fullstack.tutorial.backend;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.stream.Stream;

@Converter(autoApply = true)
public class GenreConverter implements AttributeConverter<Genre, String> {
    @Override
    public String convertToDatabaseColumn(Genre genre) {
        if(genre == null){
            return null;
        }
        return genre.getCode();
    }

    @Override
    public Genre convertToEntityAttribute(String code) {
        if(code == null){
            return null;
        }
        return Stream.of(Genre.values())
                .filter(e -> e.getCode().equals(code))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
    }
}
