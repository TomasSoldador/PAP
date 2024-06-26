-- MySQL Script generated by MySQL Workbench
-- Tue Mar 19 21:23:59 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema pap
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pap
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pap` DEFAULT CHARACTER SET utf8 ;
USE `pap` ;

-- -----------------------------------------------------
-- Table `pap`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pap`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(245) NOT NULL,
  `sobrenome` VARCHAR(245) NOT NULL,
  `email` VARCHAR(245) NOT NULL,
  `password` VARCHAR(245) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pap`.`perfil`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pap`.`perfil` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(245) NOT NULL,
  `imageUrl` VARCHAR(245) NULL,
  `genero` VARCHAR(45) NULL,
  `descricao` VARCHAR(245) NULL,
  `data_nascimento` VARCHAR(45) NOT NULL,
  `Usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  INDEX `fk_table1_Usuario_idx` (`Usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_table1_Usuario`
    FOREIGN KEY (`Usuario_id`)
    REFERENCES `pap`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pap`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pap`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `perfil_id` INT NOT NULL,
  `foto1` VARCHAR(245) NOT NULL,
  `foto2` VARCHAR(245) NULL,
  `foto3` VARCHAR(245) NULL,
  `foto4` VARCHAR(245) NULL,
  `descricao` VARCHAR(45) NULL,
  `Likes` INT NULL,
  `Comentarios` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_posts_perfil1_idx` (`perfil_id` ASC) VISIBLE,
  CONSTRAINT `fk_posts_perfil1`
    FOREIGN KEY (`perfil_id`)
    REFERENCES `pap`.`perfil` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pap`.`comentarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pap`.`comentarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(245) NOT NULL,
  `imageUrl` VARCHAR(245) NOT NULL,
  `comentarios` VARCHAR(245) NOT NULL,
  `like` INT NULL,
  `posts_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_comentarios_posts1_idx` (`posts_id` ASC) VISIBLE,
  CONSTRAINT `fk_comentarios_posts1`
    FOREIGN KEY (`posts_id`)
    REFERENCES `pap`.`posts` (`id`)
    ON DELETE CASCADE       -- Alteração para CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pap`.`scomentarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pap`.`scomentarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(245) NOT NULL,
  `imageUrl` VARCHAR(245) NOT NULL,
  `comentario` VARCHAR(245) NOT NULL,
  `like` INT NULL,
  `comentarios_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_scomentarios_comentarios1_idx` (`comentarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_scomentarios_comentarios1`
    FOREIGN KEY (`comentarios_id`)
    REFERENCES `pap`.`comentarios` (`id`)
    ON DELETE CASCADE 
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pap`.`PostsLoja`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pap`.`PostsLoja` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `perfil_id` INT NOT NULL,
  `nome` VARCHAR(245) NOT NULL,
  `numero` INT NOT NULL,
  `localizacao` VARCHAR(245) NOT NULL,
  `preco` VARCHAR(245) NULL,
  `descricao` VARCHAR(245) NOT NULL,
  `foto1` VARCHAR(245) NOT NULL,
  `foto2` VARCHAR(245) NULL,
  `foto3` VARCHAR(245) NULL,
  `foto4` VARCHAR(245) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_PostsLoja_perfil1_idx` (`perfil_id` ASC) VISIBLE,
  CONSTRAINT `fk_PostsLoja_perfil1`
    FOREIGN KEY (`perfil_id`)
    REFERENCES `pap`.`perfil` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pap`.`seguidores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pap`.`seguidores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_user` INT NOT NULL,
  `perfil_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_seguidores_perfil1_idx` (`perfil_id` ASC) VISIBLE,
  CONSTRAINT `fk_seguidores_perfil1`
    FOREIGN KEY (`perfil_id`)
    REFERENCES `pap`.`perfil` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
