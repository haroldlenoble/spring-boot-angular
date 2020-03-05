# spring-boot-angular
Fullstack tutorial implementing CRUD API.

## Setup Angular & Spring Boot

### Prerequisites

1. Java 11
2. Maven 3.3.9
3. Spring Boot 2.2.5
4. Angular 9

#### MacOSX

```
brew install node
npm install @angular/cli
```

#### Linux

```
sudo apt update
sudo apt install node
npm install @angular/cli
```

#### Windows

```
choco install npm
npm install @angular/cli
```

## Project setup

```
spring-boot-angular
├─┬ backend     → backend module with Spring Boot code
│ ├── src
│ └── pom.xml
├─┬ frontend    → frontend module with Angular code
│ ├── src
│ └── pom.xml
└── pom.xml     → Maven parent pom managing both modules
```

## Backend

Go to https://start.spring.io/ and initialize a Spring Boot app with `Web`, `data-jpa`, `data-rest` and `h2`. Place the zip’s contents in the backend folder.

Customize pom to copy content from Frontend to Backend for serving it later with the embedded Tomcat:

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
        <plugin>
            <artifactId>maven-resources-plugin</artifactId>
            <executions>
                <execution>
                    <id>copy Angular cli frontend content</id>
                    <phase>generate-resources</phase>
                    <goals>
                        <goal>copy-resources</goal>
                    </goals>
                    <configuration>
                        <outputDirectory>src/main/resources/public</outputDirectory>
                        <overwrite>true</overwrite>
                        <resources>
                            <resource>
                                <directory>${project.parent.basedir}/frontend/dist/frontend</directory>
                                <includes>
                                    <include>**</include>
                                </includes>
                            </resource>
                        </resources>
                    </configuration>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```


## Frontend

Creating our `frontend` project is done by the slightly changed (we use `--no-git` here, because our parent project is already a git repository and otherwise Angular CLI would initialize an new one):

```
ng new frontend --no-git
```

see https://www.npmjs.com/package/@angular/cli

This will initialize a project skeleton for Angular in /frontend directory. Then create a pom.xml inside `frontend` directory so it will become a maven module. Read more here: https://spring.io/guides/gs/multi-module/

If you want to learn more about using  Angular head over to the docs: https://angular.io/docs

## First App run

Inside the root directory, do a: 

```
mvn clean install
```

Run our complete Spring Boot App:

```
mvn --projects backend spring-boot:run
```

Now go to http://localhost:8088/ and have a look at your first Angular Spring Boot App.
