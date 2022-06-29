-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 29, 2022 at 10:08 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lame`
--

-- --------------------------------------------------------

--
-- Table structure for table `finished_products`
--

CREATE TABLE `finished_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `serial_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `MD` date NOT NULL,
  `EXD` date NOT NULL,
  `price` double(8,2) NOT NULL,
  `warehouse` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `finished_products`
--

INSERT INTO `finished_products` (`id`, `serial_number`, `type`, `MD`, `EXD`, `price`, `warehouse`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'product-4452', 'dolorum', '1975-01-30', '2006-10-03', 40302.32, 'reiciendis', 4, '2022-05-28 17:16:38', '2022-05-28 17:16:38'),
(2, 'product-9620', 'assumenda', '2007-08-13', '2016-06-21', 38086.72, 'et', 1, '2022-05-28 17:16:38', '2022-05-28 17:16:38'),
(3, 'product-3736', 'deleniti', '1996-03-07', '1973-09-01', 30416.51, 'et', 2, '2022-05-28 17:16:38', '2022-05-28 17:16:38'),
(4, 'product-6236', 'tempore', '1986-09-14', '2005-11-06', 10759.47, 'et', 6, '2022-05-28 17:16:38', '2022-05-28 17:16:38'),
(5, 'product-8047', 'repellendus', '1973-06-22', '1996-02-04', 42349.78, 'et', 2, '2022-05-28 17:16:38', '2022-05-28 17:16:38'),
(6, 'product-4500', 'rerum', '1996-05-12', '1989-01-11', 47486.33, 'ea', 4, '2022-05-28 17:16:38', '2022-05-28 17:16:38'),
(7, 'product-0940', 'ipsum', '1991-07-28', '1971-05-02', 12622.76, 'porro', 5, '2022-05-28 17:16:38', '2022-05-28 17:16:38'),
(8, 'product-0234', 'iste', '1988-02-04', '2009-11-10', 47012.30, 'laborum', 4, '2022-05-28 17:16:38', '2022-05-28 17:16:38'),
(9, 'product-7872', 'facilis', '2012-01-27', '1978-04-18', 46328.27, 'nihil', 5, '2022-05-28 17:16:39', '2022-05-28 17:16:39'),
(10, 'product-8818', 'molestiae', '1981-04-17', '1981-03-23', 32688.61, 'dolores', 1, '2022-05-28 17:16:39', '2022-05-28 17:16:39'),
(11, 'product-1234', 'yoghurt', '2013-11-01', '2013-11-01', 100.00, '90.00', 1, '2022-05-29 04:50:10', '2022-05-29 04:51:36');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(4, '2022_05_27_064353_create_permission_tables', 1),
(5, '2022_05_27_084141_create_payable_accounts_table', 1),
(6, '2022_05_27_084225_create_receivable_accounts_table', 1),
(7, '2022_05_27_084310_create_treasury_table', 1),
(8, '2022_05_27_084321_create_purchase_requisitions_table', 1),
(9, '2022_05_27_084337_create_purchase_orders_table', 1),
(10, '2022_05_27_084352_create_production_machinery_table', 1),
(11, '2022_05_27_084402_create_production_order_table', 1),
(12, '2022_05_27_084417_create_warehouses_table', 1),
(13, '2022_05_27_084438_create_raw_material_table', 1),
(14, '2022_05_27_084451_create_finished_products_table', 1),
(15, '2022_05_27_084503_create_shipping_table', 1),
(16, '2022_05_27_084519_create_planning_orders_table', 1),
(17, '2022_05_27_084530_create_sales_statement_table', 1),
(18, '2022_05_27_084546_create_sales_order_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1),
(2, 'App\\Models\\User', 2),
(3, 'App\\Models\\User', 3),
(4, 'App\\Models\\User', 4),
(5, 'App\\Models\\User', 5),
(6, 'App\\Models\\User', 6),
(7, 'App\\Models\\User', 7);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payable_accounts`
--

CREATE TABLE `payable_accounts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'create users', 'web', NULL, NULL),
(2, 'read users', 'web', NULL, NULL),
(3, 'update users', 'web', NULL, NULL),
(4, 'delete users', 'web', NULL, NULL),
(5, 'create treasury', 'web', NULL, NULL),
(6, 'read treasury', 'web', NULL, NULL),
(7, 'update treasury', 'web', NULL, NULL),
(8, 'delete treasury', 'web', NULL, NULL),
(9, 'create payableAccounts', 'web', NULL, NULL),
(10, 'read payableAccounts', 'web', NULL, NULL),
(11, 'update payableAccounts', 'web', NULL, NULL),
(12, 'delete payableAccounts', 'web', NULL, NULL),
(13, 'create receivableAccounts', 'web', NULL, NULL),
(14, 'read receivableAccounts', 'web', NULL, NULL),
(15, 'update receivableAccounts', 'web', NULL, NULL),
(16, 'delete receivableAccounts', 'web', NULL, NULL),
(17, 'create purchaseRequisitions', 'web', NULL, NULL),
(18, 'read purchaseRequisitions', 'web', NULL, NULL),
(19, 'update purchaseRequisitions', 'web', NULL, NULL),
(20, 'delete purchaseRequisitions', 'web', NULL, NULL),
(21, 'create purchaseOrders', 'web', NULL, NULL),
(22, 'read purchaseOrders', 'web', NULL, NULL),
(23, 'update purchaseOrders', 'web', NULL, NULL),
(24, 'delete purchaseOrders', 'web', NULL, NULL),
(25, 'create productionMachinery', 'web', NULL, NULL),
(26, 'read productionMachinery', 'web', NULL, NULL),
(27, 'update productionMachinery', 'web', NULL, NULL),
(28, 'delete productionMachinery', 'web', NULL, NULL),
(29, 'create productionOrder', 'web', NULL, NULL),
(30, 'read productionOrder', 'web', NULL, NULL),
(31, 'update productionOrder', 'web', NULL, NULL),
(32, 'delete productionOrder', 'web', NULL, NULL),
(33, 'create warehouses', 'web', NULL, NULL),
(34, 'read warehouses', 'web', NULL, NULL),
(35, 'update warehouses', 'web', NULL, NULL),
(36, 'delete warehouses', 'web', NULL, NULL),
(37, 'create rawMaterial', 'web', NULL, NULL),
(38, 'read rawMaterial', 'web', NULL, NULL),
(39, 'update rawMaterial', 'web', NULL, NULL),
(40, 'delete rawMaterial', 'web', NULL, NULL),
(41, 'create finishedProducts', 'web', NULL, NULL),
(42, 'read finishedProducts', 'web', NULL, NULL),
(43, 'update finishedProducts', 'web', NULL, NULL),
(44, 'delete finishedProducts', 'web', NULL, NULL),
(45, 'create shipping', 'web', NULL, NULL),
(46, 'read shipping', 'web', NULL, NULL),
(47, 'update shipping', 'web', NULL, NULL),
(48, 'delete shipping', 'web', NULL, NULL),
(49, 'create planningOrders', 'web', NULL, NULL),
(50, 'read planningOrders', 'web', NULL, NULL),
(51, 'update planningOrders', 'web', NULL, NULL),
(52, 'delete planningOrders', 'web', NULL, NULL),
(53, 'create salesStatement', 'web', NULL, NULL),
(54, 'read salesStatement', 'web', NULL, NULL),
(55, 'update salesStatement', 'web', NULL, NULL),
(56, 'delete salesStatement', 'web', NULL, NULL),
(57, 'create salesOrder', 'web', NULL, NULL),
(58, 'read salesOrder', 'web', NULL, NULL),
(59, 'update salesOrder', 'web', NULL, NULL),
(60, 'delete salesOrder', 'web', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'dagnachew', '39b9d7a20d1414f58f93f7c69298c7dc2f838acdf0c9cfa401ce9bdee68fbe3a', '[\"*\"]', '2022-05-28 17:26:01', '2022-05-28 17:24:44', '2022-05-28 17:26:01'),
(2, 'App\\Models\\User', 2, 'dagnachew', 'eb4a68c8ca1ebced02b98378ab223127a1a519834b9d74873119cec4880b4f61', '[\"*\"]', '2022-05-28 17:31:31', '2022-05-28 17:30:55', '2022-05-28 17:31:31'),
(3, 'App\\Models\\User', 1, 'dagnachew', 'd33c3a8a8de4d896725ea111f0f6dfb3c4d1d96d621d7e87cba3389bdb69863d', '[\"*\"]', '2022-05-28 17:51:12', '2022-05-28 17:32:14', '2022-05-28 17:51:12'),
(6, 'App\\Models\\User', 1, 'dagnachew', '13447388f621df33aed672fb4f93957dfab5c39dd858f79b1957aa89066e0455', '[\"*\"]', '2022-05-28 19:44:35', '2022-05-28 19:05:36', '2022-05-28 19:44:35'),
(7, 'App\\Models\\User', 1, 'dagnachew', '313560c1c32dca7e2e49f66b5a138c1942605570d56b639c214f50a247cf960f', '[\"*\"]', '2022-05-29 05:06:12', '2022-05-29 04:32:40', '2022-05-29 05:06:12');

-- --------------------------------------------------------

--
-- Table structure for table `planning_orders`
--

CREATE TABLE `planning_orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `production_machineries`
--

CREATE TABLE `production_machineries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `machine_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `department` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `operator_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cost` double(8,2) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `stop_date` date DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `production_machineries`
--

INSERT INTO `production_machineries` (`id`, `machine_id`, `department`, `name`, `operator_id`, `cost`, `start_date`, `stop_date`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'machine-3406', 'qui', 'eum quasi', 'operator-3597', 851280.51, '1981-09-28', '2013-10-17', 6, '2022-05-28 17:16:39', '2022-05-28 17:16:39'),
(2, 'machine-9073', 'incidunt', 'ad dolor', 'operator-8002', 192986.77, '1974-12-07', '2015-04-04', 2, '2022-05-28 17:16:39', '2022-05-28 17:16:39'),
(3, 'machine-3976', 'molestiae', 'a aliquid', 'operator-6131', 465815.04, '1980-08-19', '1991-04-16', 1, '2022-05-28 17:16:39', '2022-05-28 17:16:39'),
(4, 'machine-4813', 'molestiae', 'exercitationem est', 'operator-8370', 182630.23, '1982-04-03', '1988-05-06', 2, '2022-05-28 17:16:39', '2022-05-28 17:16:39'),
(5, 'machine-1999', 'repudiandae', 'nisi temporibus', 'operator-5935', 194283.99, '2021-02-22', '2020-07-10', 3, '2022-05-28 17:16:39', '2022-05-28 17:16:39'),
(6, 'machine-7901', 'ad', 'vel voluptatibus', 'operator-7315', 825172.69, '1983-10-02', '1988-06-21', 1, '2022-05-28 17:16:39', '2022-05-28 17:16:39'),
(7, 'machine-6979', 'qui', 'enim vel', 'operator-9180', 274958.35, '2016-12-26', '2004-11-14', 1, '2022-05-28 17:16:39', '2022-05-28 17:16:39'),
(8, 'machine-5611', 'error', 'debitis fuga', 'operator-5747', 950580.96, '1988-06-10', '1999-11-03', 4, '2022-05-28 17:16:39', '2022-05-28 17:16:39'),
(9, 'machine-5568', 'aut', 'dolorum cumque', 'operator-1962', 621725.11, '1986-08-27', '1973-10-30', 2, '2022-05-28 17:16:39', '2022-05-28 17:16:39'),
(10, 'machine-9635', 'explicabo', 'ratione expedita', 'operator-4490', 372667.61, '2002-11-24', '1970-12-29', 6, '2022-05-28 17:16:39', '2022-05-28 17:16:39'),
(11, 'machine-90', 'production', 'filter', 'operator-167', 20000.00, '2013-11-01', '2013-11-01', 1, '2022-05-29 04:56:42', '2022-05-29 04:57:46');

-- --------------------------------------------------------

--
-- Table structure for table `production_order`
--

CREATE TABLE `production_order` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `purchase_orders`
--

CREATE TABLE `purchase_orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `purchase_requisitions`
--

CREATE TABLE `purchase_requisitions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `raw_materials`
--

CREATE TABLE `raw_materials` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` int(11) NOT NULL,
  `purchased_date` date NOT NULL,
  `shipped_out_date` date NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `raw_materials`
--

INSERT INTO `raw_materials` (`id`, `name`, `amount`, `purchased_date`, `shipped_out_date`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'necessitatibus', 52, '2013-11-01', '2001-02-17', 2, '2022-05-28 17:16:39', '2022-05-28 17:16:39'),
(2, 'ut', 97, '2004-12-14', '2000-08-07', 3, '2022-05-28 17:16:40', '2022-05-28 17:16:40'),
(3, 'dolorem', 73, '1982-09-16', '1995-07-08', 6, '2022-05-28 17:16:40', '2022-05-28 17:16:40'),
(4, 'eos', 64, '1983-08-09', '1998-06-15', 2, '2022-05-28 17:16:40', '2022-05-28 17:16:40'),
(5, 'cumque', 17, '2017-09-18', '1984-03-02', 7, '2022-05-28 17:16:40', '2022-05-28 17:16:40'),
(6, 'ipsum', 94, '2008-05-22', '1985-04-19', 7, '2022-05-28 17:16:40', '2022-05-28 17:16:40'),
(7, 'sed', 67, '2019-12-02', '1987-07-07', 6, '2022-05-28 17:16:40', '2022-05-28 17:16:40'),
(8, 'fuga', 83, '2018-07-28', '2018-12-09', 6, '2022-05-28 17:16:40', '2022-05-28 17:16:40'),
(9, 'incidunt', 51, '1984-12-18', '1998-02-14', 1, '2022-05-28 17:16:40', '2022-05-28 17:16:40'),
(10, 'a', 93, '2017-02-12', '1981-12-22', 2, '2022-05-28 17:16:41', '2022-05-28 17:16:41'),
(11, 'raw milk', 26, '2013-11-01', '2013-11-01', NULL, '2022-05-28 19:17:12', '2022-05-28 19:17:12'),
(12, 'plastic', 56, '2013-11-01', '2013-11-01', NULL, '2022-05-28 19:21:47', '2022-05-28 19:21:47'),
(13, 'flavour', 10, '2013-11-01', '2013-11-01', 1, '2022-05-28 19:23:33', '2022-05-28 19:38:30'),
(14, 'sugar', 100, '2013-11-01', '2013-11-01', 1, '2022-05-28 19:25:42', '2022-05-28 19:25:42');

-- --------------------------------------------------------

--
-- Table structure for table `receivable_accounts`
--

CREATE TABLE `receivable_accounts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'web', '2022-05-28 17:16:29', '2022-05-28 17:16:29'),
(2, 'GL', 'web', '2022-05-28 17:16:33', '2022-05-28 17:16:33'),
(3, 'purchase', 'web', '2022-05-28 17:16:35', '2022-05-28 17:16:35'),
(4, 'production', 'web', '2022-05-28 17:16:35', '2022-05-28 17:16:35'),
(5, 'inventory', 'web', '2022-05-28 17:16:35', '2022-05-28 17:16:35'),
(6, 'planning', 'web', '2022-05-28 17:16:36', '2022-05-28 17:16:36'),
(7, 'sales', 'web', '2022-05-28 17:16:37', '2022-05-28 17:16:37');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(1, 1),
(2, 1),
(2, 2),
(3, 1),
(3, 2),
(4, 1),
(4, 2),
(5, 1),
(5, 2),
(6, 1),
(6, 2),
(6, 6),
(7, 1),
(7, 2),
(8, 1),
(8, 2),
(9, 1),
(9, 2),
(10, 1),
(10, 2),
(11, 1),
(11, 2),
(12, 1),
(12, 2),
(13, 1),
(13, 2),
(14, 1),
(14, 2),
(15, 1),
(15, 2),
(16, 1),
(16, 2),
(17, 1),
(17, 3),
(18, 1),
(18, 3),
(19, 1),
(19, 3),
(20, 1),
(20, 3),
(21, 1),
(22, 1),
(22, 3),
(23, 1),
(24, 1),
(25, 1),
(25, 4),
(26, 1),
(26, 4),
(27, 1),
(27, 4),
(28, 1),
(28, 4),
(29, 1),
(30, 1),
(30, 4),
(31, 1),
(32, 1),
(33, 1),
(33, 5),
(34, 1),
(34, 5),
(35, 1),
(35, 5),
(36, 1),
(36, 5),
(37, 1),
(37, 5),
(38, 1),
(38, 5),
(38, 6),
(39, 1),
(39, 5),
(40, 1),
(40, 5),
(41, 1),
(41, 5),
(42, 1),
(42, 5),
(42, 6),
(43, 1),
(43, 5),
(44, 1),
(44, 5),
(45, 1),
(45, 5),
(46, 1),
(46, 5),
(47, 1),
(47, 5),
(48, 1),
(48, 5),
(49, 1),
(49, 6),
(50, 1),
(50, 6),
(51, 1),
(51, 6),
(52, 1),
(52, 6),
(53, 1),
(53, 7),
(54, 1),
(54, 7),
(55, 1),
(55, 7),
(56, 1),
(56, 7),
(57, 1),
(58, 1),
(58, 7),
(59, 1),
(60, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sales_order`
--

CREATE TABLE `sales_order` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sales_statement`
--

CREATE TABLE `sales_statement` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `shipping`
--

CREATE TABLE `shipping` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `treasuries`
--

CREATE TABLE `treasuries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `submission_date` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `account_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cost` double(8,2) NOT NULL,
  `amount` int(11) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `treasuries`
--

INSERT INTO `treasuries` (`id`, `name`, `submission_date`, `account_type`, `cost`, `amount`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'in', '2010-10-02', 'natus', 310917.36, 57, 7, '2022-05-28 17:16:41', '2022-05-28 17:16:41'),
(2, 'et', '1980-08-17', 'ut', 415204.33, 26, 1, '2022-05-28 17:16:41', '2022-05-28 17:16:41'),
(3, 'non', '1974-11-30', 'voluptate', 837012.81, 26, 4, '2022-05-28 17:16:41', '2022-05-28 17:16:41'),
(4, 'omnis', '2000-06-03', 'rerum', 173978.10, 53, 3, '2022-05-28 17:16:41', '2022-05-28 17:16:41'),
(5, 'enim', '2013-12-18', 'nesciunt', 391539.54, 76, 7, '2022-05-28 17:16:41', '2022-05-28 17:16:41'),
(6, 'nam', '1985-05-09', 'expedita', 918528.46, 40, 5, '2022-05-28 17:16:41', '2022-05-28 17:16:41'),
(7, 'adipisci', '2010-10-25', 'quis', 437622.14, 93, 3, '2022-05-28 17:16:41', '2022-05-28 17:16:41'),
(8, 'ut', '2004-07-26', 'ullam', 342693.65, 75, 6, '2022-05-28 17:16:41', '2022-05-28 17:16:41'),
(9, 'officia', '1973-06-25', 'debitis', 704684.26, 96, 3, '2022-05-28 17:16:41', '2022-05-28 17:16:41'),
(10, 'quia', '1980-01-16', 'nam', 817192.43, 33, 3, '2022-05-28 17:16:41', '2022-05-28 17:16:41'),
(11, 'abebe', '2013-11-01', 'payable', 30000.00, 90, 1, '2022-05-29 05:01:27', '2022-05-29 05:02:22');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `start_date` date NOT NULL,
  `department` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `salary` double(8,2) NOT NULL,
  `stop_date` date DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `phone_number`, `start_date`, `department`, `position`, `salary`, `stop_date`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@gmail.com', '2022-05-28 17:16:28', '$2y$10$SVerL4lnn/kHKDH7xKExYeV.hvPHtQfsHO4yJQ3MxbpuzKjyw8J5q', '1111111111', '2022-05-27', 'adminstrator', 'manager', 50000.00, NULL, 'vatQZbfgvS', '2022-05-28 17:16:28', '2022-05-28 17:16:28'),
(2, 'GL', 'GL@gmail.com', '2022-05-28 17:16:28', '$2y$10$CI8/NuQD1.jIcJaCLNCTeeG.z3Z1h7UN3oS251GHfHCkU7qZarFcu', '2222222222', '2022-05-27', 'general ledger', 'director', 10000.00, NULL, 'zKgzEGwxB8', '2022-05-28 17:16:28', '2022-05-28 17:16:28'),
(3, 'purchase', 'purchase@gmail.com', '2022-05-28 17:16:28', '$2y$10$UbKxa9yCZOTOxmk3o1fiWeD0O4QjXPlmVgMMHkPsVWFjqjc0ZO.ae', '3333333333', '2022-05-27', 'purchase', 'director', 10000.00, NULL, '3dhWoy1cXr', '2022-05-28 17:16:28', '2022-05-28 17:16:28'),
(4, 'production', 'production@gmail.com', '2022-05-28 17:16:28', '$2y$10$A9QIL..ix5MzK2Om.cEBHeg17YUaJPfPJ7QPrmMBuTV6gkH0aQ31S', '4444444444', '2022-05-27', 'production', 'director', 10000.00, NULL, 'qkjS2PJVeA', '2022-05-28 17:16:29', '2022-05-28 17:16:29'),
(5, 'inventory', 'inventory@gmail.com', '2022-05-28 17:16:29', '$2y$10$fDYn1isymeJa4DLgITvhJOLJgifNnitHRomiss/Py/BBWVmjY8QEq', '555555555', '2022-05-27', 'inventory', 'director', 10000.00, NULL, 'NUTahG4XGP', '2022-05-28 17:16:29', '2022-05-28 17:16:29'),
(6, 'planning', 'planning@gmail.com', '2022-05-28 17:16:29', '$2y$10$TCCoRI9dVaG5gANg7D49fu8aDpBoRcvrWGLJDpv7ZRChyIODlU8C.', '6666666666', '2022-05-27', 'planning', 'director', 50000.00, NULL, 'tQDXhGXYyA', '2022-05-28 17:16:29', '2022-05-28 17:16:29'),
(7, 'sales', 'sales@gmail.com', '2022-05-28 17:16:29', '$2y$10$ha52CzNe54R/I4KAHAQGyu664JcTViJu/5A4gNwNN9SKZK4fLyHUe', '777777777', '2022-05-27', 'sales', 'director', 10000.00, NULL, 'gzMTLBaX6r', '2022-05-28 17:16:29', '2022-05-28 17:16:29');

-- --------------------------------------------------------

--
-- Table structure for table `warehouses`
--

CREATE TABLE `warehouses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `capacity` int(11) DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `warehouses`
--

INSERT INTO `warehouses` (`id`, `name`, `capacity`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'asperiores', 63, 1, '2022-05-28 17:16:41', '2022-05-28 17:16:41'),
(2, 'voluptas', 9, 7, '2022-05-28 17:16:42', '2022-05-28 17:16:42'),
(3, 'hic', 90, 6, '2022-05-28 17:16:42', '2022-05-28 17:16:42'),
(4, 'asperiores', 69, 3, '2022-05-28 17:16:42', '2022-05-28 17:16:42'),
(5, 'corrupti', 27, 3, '2022-05-28 17:16:42', '2022-05-28 17:16:42'),
(6, 'voluptatem', 91, 7, '2022-05-28 17:16:42', '2022-05-28 17:16:42'),
(7, 'fugiat', 91, 3, '2022-05-28 17:16:42', '2022-05-28 17:16:42'),
(8, 'kaliti', 40, 1, '2022-05-28 17:16:42', '2022-05-29 05:05:52'),
(9, 'est', 30, 6, '2022-05-28 17:16:42', '2022-05-28 17:16:42'),
(10, 'accusamus', 78, 6, '2022-05-28 17:16:42', '2022-05-28 17:16:42'),
(11, 'lamberet', 35, 1, '2022-05-29 05:03:46', '2022-05-29 05:06:12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `finished_products`
--
ALTER TABLE `finished_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `finished_products_user_id_foreign` (`user_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `payable_accounts`
--
ALTER TABLE `payable_accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `planning_orders`
--
ALTER TABLE `planning_orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `production_machineries`
--
ALTER TABLE `production_machineries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `production_machineries_user_id_foreign` (`user_id`);

--
-- Indexes for table `production_order`
--
ALTER TABLE `production_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchase_orders`
--
ALTER TABLE `purchase_orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchase_requisitions`
--
ALTER TABLE `purchase_requisitions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `raw_materials`
--
ALTER TABLE `raw_materials`
  ADD PRIMARY KEY (`id`),
  ADD KEY `raw_materials_user_id_foreign` (`user_id`);

--
-- Indexes for table `receivable_accounts`
--
ALTER TABLE `receivable_accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `sales_order`
--
ALTER TABLE `sales_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales_statement`
--
ALTER TABLE `sales_statement`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shipping`
--
ALTER TABLE `shipping`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `treasuries`
--
ALTER TABLE `treasuries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `treasuries_user_id_foreign` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `warehouses`
--
ALTER TABLE `warehouses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `warehouses_user_id_foreign` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `finished_products`
--
ALTER TABLE `finished_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `payable_accounts`
--
ALTER TABLE `payable_accounts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `planning_orders`
--
ALTER TABLE `planning_orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `production_machineries`
--
ALTER TABLE `production_machineries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `production_order`
--
ALTER TABLE `production_order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `purchase_orders`
--
ALTER TABLE `purchase_orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `purchase_requisitions`
--
ALTER TABLE `purchase_requisitions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `raw_materials`
--
ALTER TABLE `raw_materials`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `receivable_accounts`
--
ALTER TABLE `receivable_accounts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `sales_order`
--
ALTER TABLE `sales_order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sales_statement`
--
ALTER TABLE `sales_statement`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shipping`
--
ALTER TABLE `shipping`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `treasuries`
--
ALTER TABLE `treasuries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `warehouses`
--
ALTER TABLE `warehouses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `finished_products`
--
ALTER TABLE `finished_products`
  ADD CONSTRAINT `finished_products_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `production_machineries`
--
ALTER TABLE `production_machineries`
  ADD CONSTRAINT `production_machineries_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `raw_materials`
--
ALTER TABLE `raw_materials`
  ADD CONSTRAINT `raw_materials_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `treasuries`
--
ALTER TABLE `treasuries`
  ADD CONSTRAINT `treasuries_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `warehouses`
--
ALTER TABLE `warehouses`
  ADD CONSTRAINT `warehouses_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
