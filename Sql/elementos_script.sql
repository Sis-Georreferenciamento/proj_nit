CREATE TABLE IF NOT EXISTS tipo_elemento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255)
);

-- Inserção de dados na tabela tipo_elemento
INSERT INTO tipo_elemento (nome) VALUES
('Caixa Ralo'),
('PV'),
('PV com boca de ralo'),entrada
('Mata burro');

-- Criação da tabela tipo_tampa
CREATE TABLE IF NOT EXISTS tipo_tampa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255)
);

-- Inserção de dados na tabela tipo_tampa
INSERT INTO tipo_tampa (nome) VALUES
('Grelha de concreto'),
('Grelha de Ferro'),
('Grelha de Plástico'),
('Tampão de Concreto Cego'),
('Tampão de Concreto Furado'),
('Tampão de Concreto Duplo'),
('Tampão Redondo');

-- Criação da tabela entrada
CREATE TABLE IF NOT EXISTS entrada (
    id INT AUTO_INCREMENT PRIMARY KEY,
    diametro_entrada DECIMAL(5,2)
);

-- Inserção de dados na tabela entrada
INSERT INTO entrada (diametro_entrada) VALUES
(50.00),
(100.00),
(150.00);

-- Criação da tabela saida
CREATE TABLE IF NOT EXISTS saida (
    id INT AUTO_INCREMENT PRIMARY KEY,
    diametro_saida DECIMAL(5,2)
);

-- Inserção de dados na tabela saida
INSERT INTO saida (diametro_saida) VALUES
(50.00),
(100.00),
(150.00);

-- Criação da tabela rede
CREATE TABLE IF NOT EXISTS rede (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255)
);

-- Inserção de dados na tabela rede
INSERT INTO rede (nome) VALUES
('Rede 1'),
('Rede 2'),
('Rede 3');