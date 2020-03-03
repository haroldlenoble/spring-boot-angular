package com.fullstack.tutorial.backend;


import lombok.Getter;

public enum Genre {
    man("m"),
    woman("w"),
    other("o");

    @Getter
    private String code;

    Genre(String genre) { this.code = genre ;}

    public static Genre parse(String value){
        for(Genre genre : Genre.values()){
            if(genre.getCode().equals(value)){
                return genre;
            }
        }
        throw new IllegalArgumentException();
    }
}
