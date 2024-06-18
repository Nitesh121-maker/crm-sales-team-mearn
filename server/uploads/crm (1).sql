-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2024 at 01:49 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crm`
--

-- --------------------------------------------------------

--
-- Table structure for table `78432`
--

CREATE TABLE `78432` (
  `uid` bigint(20) UNSIGNED NOT NULL,
  `clientid` varchar(30) NOT NULL,
  `message` longtext NOT NULL,
  `adminmessage` varchar(255) NOT NULL,
  `reminder` varchar(100) NOT NULL,
  `sent_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `78432`
--

INSERT INTO `78432` (`uid`, `clientid`, `message`, `adminmessage`, `reminder`, `sent_at`) VALUES
(1, '78432', 'Little Change in schedule Call after 5 minute', '', '2024-05-14T12:30', '2024-05-14 06:56:14'),
(2, '78432', 'Call at 1:25', '', '2024-05-14T13:25', '2024-05-14 07:50:44'),
(3, '78432', 'Call Nitesh at 1:32', '', '2024-05-14T13:32', '2024-05-14 08:01:02'),
(4, '78432', 'HI', '', '', '2024-05-14 08:03:04'),
(5, '78432', 'HI', '', '', '2024-05-14 08:06:31'),
(6, '78432', 'Call Nitesh at 1:40', '', '2024-05-14T13:40', '2024-05-14 08:10:44'),
(7, '78432', 'Little Change in schedule Call Nitesh After 3:15 ', '', '2024-05-14T15:16', '2024-05-14 09:42:41'),
(8, '78432', 'hi', '', '', '2024-05-22 12:46:23'),
(9, '78432', 'testing', '', '', '2024-05-23 05:15:59'),
(10, '78432', 'testing', '', '2024-05-23T10:46', '2024-05-23 05:16:33'),
(11, '78432', 'testing', '', '2024-05-23T11:18', '2024-05-23 05:48:33'),
(12, '78432', 'testing', '', '2024-05-23T11:19', '2024-05-23 05:49:03'),
(13, '78432', 'testing', '', '2024-05-23T11:20', '2024-05-23 05:49:44'),
(14, '', '', 'hi', '', '2024-05-23 07:00:24'),
(15, '', '', 'hii', '', '2024-05-23 07:01:57'),
(16, '78432', 'Hello', '', '', '2024-05-23 07:02:46'),
(17, '', '', 'hii', '', '2024-05-23 07:03:18'),
(18, '78432', 'hi', '', '', '2024-05-23 07:10:16'),
(19, '78432', 'hello', '', '2024-05-23T12:44', '2024-05-23 07:14:52'),
(20, '78432', 'Testing', '', '2024-05-23T12:46', '2024-05-23 07:16:55'),
(21, '', '', 'hello\n', '', '2024-05-23 07:50:45'),
(22, '', '', 'hi', '', '2024-05-23 07:51:12'),
(23, '78432', 'Testing', '', '2024-05-23T13:21', '2024-05-23 07:51:37'),
(24, '78432', 'Hello Ma\'am ', '', '2024-05-23T13:28', '2024-05-23 07:58:10'),
(25, '', '', 'Hi Nitesh', '', '2024-05-23 07:58:23'),
(26, '', '', 'You’re finished! Now when you run npm run start, Tailwind CSS will be ready to use in your Create React App project.', '', '2024-05-23 10:40:56'),
(27, '', '', 'Hello', '', '2024-06-12 09:25:47');

-- --------------------------------------------------------

--
-- Table structure for table `78433`
--

CREATE TABLE `78433` (
  `uid` bigint(20) UNSIGNED NOT NULL,
  `clientid` varchar(30) NOT NULL,
  `message` longtext NOT NULL,
  `reminder` varchar(100) NOT NULL,
  `sent_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `78433`
--

INSERT INTO `78433` (`uid`, `clientid`, `message`, `reminder`, `sent_at`) VALUES
(1, '78433', 'Call at 1:30', '2024-05-14T13:30', '2024-05-14 07:59:50'),
(2, '78433', 'Call at 3:00 PM', '2024-05-14T15:00', '2024-05-14 09:27:47'),
(3, '78433', 'Shakti Said the US Import Sample are not accurate!', '', '2024-05-14 09:41:17'),
(4, '78433', 'Schedule call with Shakti At 3:20', '2024-05-14T15:20', '2024-05-14 09:46:14'),
(5, '78433', 'hi', '', '2024-05-14 09:48:39'),
(6, '78433', 'hi\n', '', '2024-05-14 09:52:05'),
(7, '78433', 'Testing at', '2024-05-14T16:25', '2024-05-14 10:54:16'),
(8, '78433', '7843353241', '2024-06-21T17:31', '2024-06-15 08:01:10');

-- --------------------------------------------------------

--
-- Table structure for table `78436`
--

CREATE TABLE `78436` (
  `uid` bigint(20) UNSIGNED NOT NULL,
  `clientid` varchar(30) NOT NULL,
  `message` longtext NOT NULL,
  `reminder` varchar(100) NOT NULL,
  `sent_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `78438`
--

CREATE TABLE `78438` (
  `uid` bigint(20) UNSIGNED NOT NULL,
  `clientid` varchar(30) NOT NULL,
  `message` longtext NOT NULL,
  `reminder` varchar(100) NOT NULL,
  `sent_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `78438`
--

INSERT INTO `78438` (`uid`, `clientid`, `message`, `reminder`, `sent_at`) VALUES
(1, '78438', 'hi', '', '2024-05-15 10:25:50'),
(2, '78438', 'Anshuman has messaged again, call him again at 4:20 pm ', '', '2024-05-15 10:48:06');

-- --------------------------------------------------------

--
-- Table structure for table `78439`
--

CREATE TABLE `78439` (
  `uid` bigint(20) UNSIGNED NOT NULL,
  `clientid` varchar(30) NOT NULL,
  `message` longtext NOT NULL,
  `reminder` varchar(100) NOT NULL,
  `sent_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `85542`
--

CREATE TABLE `85542` (
  `uid` bigint(20) UNSIGNED NOT NULL,
  `clientid` varchar(30) NOT NULL,
  `message` longtext NOT NULL,
  `adminmessage` longtext DEFAULT NULL,
  `reminder` varchar(100) NOT NULL,
  `sent_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `95574`
--

CREATE TABLE `95574` (
  `uid` bigint(20) UNSIGNED NOT NULL,
  `clientid` varchar(30) NOT NULL,
  `message` longtext NOT NULL,
  `adminmessage` longtext DEFAULT NULL,
  `reminder` varchar(100) NOT NULL,
  `sent_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `95574`
--

INSERT INTO `95574` (`uid`, `clientid`, `message`, `adminmessage`, `reminder`, `sent_at`) VALUES
(1, '95574', 'Kundan has asked me to call tomorrow at 12 PM ', NULL, '2024-05-28T12:00', '2024-05-27 11:38:02'),
(2, '', '', 'Okay', '', '2024-05-27 11:38:18'),
(3, '', '', 'Are bhai khol lo', '', '2024-05-27 11:39:13'),
(4, '', '', 'suno bhai', '', '2024-05-27 11:39:23'),
(5, '95574', 'khol diya bhai\n', NULL, '2024-05-29T17:09', '2024-05-27 11:39:31');

-- --------------------------------------------------------

--
-- Table structure for table `98643`
--

CREATE TABLE `98643` (
  `uid` bigint(20) UNSIGNED NOT NULL,
  `clientid` varchar(30) NOT NULL,
  `message` longtext NOT NULL,
  `adminmessage` longtext DEFAULT NULL,
  `reminder` varchar(100) NOT NULL,
  `sent_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `98643`
--

INSERT INTO `98643` (`uid`, `clientid`, `message`, `adminmessage`, `reminder`, `sent_at`) VALUES
(1, '98643', 'I\'ve had call with sweta and she told me that she will update me today at 11:40', NULL, '2024-06-03T11:40', '2024-06-03 06:07:23'),
(2, '98643', 'testing', NULL, '2024-06-03T11:41', '2024-06-03 06:10:56'),
(3, '', '', 'hi', '', '2024-06-04 06:14:02');

-- --------------------------------------------------------

--
-- Table structure for table `98647`
--

CREATE TABLE `98647` (
  `uid` bigint(20) UNSIGNED NOT NULL,
  `clientid` varchar(30) NOT NULL,
  `message` longtext NOT NULL,
  `adminmessage` longtext DEFAULT NULL,
  `reminder` varchar(100) NOT NULL,
  `sent_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `98654`
--

CREATE TABLE `98654` (
  `uid` bigint(20) UNSIGNED NOT NULL,
  `clientid` varchar(30) NOT NULL,
  `message` longtext NOT NULL,
  `adminmessage` varchar(255) NOT NULL,
  `reminder` varchar(100) NOT NULL,
  `sent_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `98654`
--

INSERT INTO `98654` (`uid`, `clientid`, `message`, `adminmessage`, `reminder`, `sent_at`) VALUES
(1, '', '', 'Hello Shakti ', '', '2024-05-23 08:05:02');

-- --------------------------------------------------------

--
-- Table structure for table `98656`
--

CREATE TABLE `98656` (
  `uid` bigint(20) UNSIGNED NOT NULL,
  `clientid` varchar(30) NOT NULL,
  `message` longtext NOT NULL,
  `adminmessage` varchar(255) NOT NULL,
  `reminder` varchar(100) NOT NULL,
  `sent_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `98656`
--

INSERT INTO `98656` (`uid`, `clientid`, `message`, `adminmessage`, `reminder`, `sent_at`) VALUES
(1, '98656', 'HI', '', '', '2024-05-22 12:51:09'),
(2, '98656', 'Hello', '', '2024-05-23T18:21', '2024-05-22 12:51:37'),
(3, '98656', 'testing', '', '', '2024-05-22 12:53:01'),
(4, '98656', 'testing', '', '2024-05-23T18:29', '2024-05-22 12:59:24'),
(5, '98656', 'testing', '', '', '2024-05-23 05:50:46'),
(6, '', '', 'what is the update on tvs inquiry\n', '', '2024-05-23 08:08:08'),
(7, '98656', 'I\'ll update you about this in next one hour', '', '2024-05-23T13:39', '2024-05-23 08:09:00');

-- --------------------------------------------------------

--
-- Table structure for table `98657`
--

CREATE TABLE `98657` (
  `uid` bigint(20) UNSIGNED NOT NULL,
  `clientid` varchar(30) NOT NULL,
  `message` longtext NOT NULL,
  `adminmessage` varchar(255) NOT NULL,
  `reminder` varchar(100) NOT NULL,
  `sent_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `98657`
--

INSERT INTO `98657` (`uid`, `clientid`, `message`, `adminmessage`, `reminder`, `sent_at`) VALUES
(1, '98657', 'I\'ve talked with Tripti and discussed about her requirements and the next call with her is scheduled at 3\'o clock', '', '2024-05-22T15:00', '2024-05-22 07:03:25');

-- --------------------------------------------------------

--
-- Table structure for table `98765`
--

CREATE TABLE `98765` (
  `uid` bigint(20) UNSIGNED NOT NULL,
  `clientid` varchar(30) NOT NULL,
  `message` longtext NOT NULL,
  `adminmessage` longtext DEFAULT NULL,
  `reminder` varchar(100) NOT NULL,
  `sent_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `98996`
--

CREATE TABLE `98996` (
  `uid` bigint(20) UNSIGNED NOT NULL,
  `clientid` varchar(30) NOT NULL,
  `message` longtext NOT NULL,
  `adminmessage` longtext DEFAULT NULL,
  `reminder` varchar(100) NOT NULL,
  `sent_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `98996`
--

INSERT INTO `98996` (`uid`, `clientid`, `message`, `adminmessage`, `reminder`, `sent_at`) VALUES
(1, '98996', 'CALL', NULL, '2024-06-12T15:59', '2024-06-12 10:28:54'),
(2, '', '', 'Whats the update\n', '', '2024-06-12 10:29:24'),
(3, '98996', 'call done but client said call back at 5pm', NULL, '2024-06-12T17:00', '2024-06-12 10:34:28');

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `password` varchar(150) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `phone`, `password`, `created_at`) VALUES
(1, 'Anuj Mehra', 'anuj.mehra@outlook.com', '8986783266', '12342135', '2024-05-31 07:07:09');

-- --------------------------------------------------------

--
-- Table structure for table `closed_leads`
--

CREATE TABLE `closed_leads` (
  `id` int(10) NOT NULL,
  `sales_person_id` varchar(110) NOT NULL,
  `unique_id` varchar(10) NOT NULL,
  `fullname` varchar(20) NOT NULL,
  `email` varchar(200) NOT NULL,
  `number` varchar(20) NOT NULL,
  `company` varchar(100) NOT NULL,
  `requirements` longtext NOT NULL,
  `reason` longtext NOT NULL,
  `closed_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `closed_leads`
--

INSERT INTO `closed_leads` (`id`, `sales_person_id`, `unique_id`, `fullname`, `email`, `number`, `company`, `requirements`, `reason`, `closed_at`, `created_at`) VALUES
(12, 'Pallavi50Ra', '98654', 'Shakti', 'shakti5050@gmail.com', '9865465243', '', 'Not Specified', 'Not Interested', '2024-05-24 06:26:18', '2024-05-22T07:01:11.'),
(13, 'Shakti99Ra', '78433', 'Shakti Raghav', 'shakti5050@gmail.com', '7843353241', '', 'Not Specified', 'Not Interested', '2024-05-27 12:18:37', '2024-05-27T11:48:35.');

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `id` int(100) NOT NULL,
  `sales_person_id` varchar(110) NOT NULL,
  `unique_id` varchar(20) NOT NULL,
  `invoice_number` varchar(150) NOT NULL,
  `fullname` varchar(110) NOT NULL,
  `email` varchar(110) NOT NULL,
  `number` varchar(20) NOT NULL,
  `company` varchar(110) NOT NULL,
  `invoice_date` varchar(50) NOT NULL,
  `invoice_file` varchar(50) NOT NULL,
  `status` varchar(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `seen` tinyint(1) NOT NULL,
  `reminded` tinyint(1) NOT NULL,
  `last_reminded` datetime DEFAULT NULL,
  `month` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`id`, `sales_person_id`, `unique_id`, `invoice_number`, `fullname`, `email`, `number`, `company`, `invoice_date`, `invoice_file`, `status`, `created_at`, `seen`, `reminded`, `last_reminded`, `month`) VALUES
(2, 'Shakti99Ra', '95574', 'TI/24-25/234', 'kundan', 'kundan@gmail.com', '9557425592', 'Tradeimex', '2024-05-27', '', '', '2024-05-30 06:30:49', 1, 1, '2024-05-30 11:58:08', ''),
(4, 'Pallavi50Ra', '78432', 'TI/24-25/1234', 'Nitesh Chauhan', 'niteshchauhan8285@gmail.com', '7843253241', 'Tradiemex', '2024-05-30', '', '', '2024-05-30 06:33:34', 1, 0, NULL, ''),
(6, 'Pallavi50Ra', '98643', 'TI/24-25/392', 'Sweta Singh', 'sweta9090@gmail.com', '9864376347', 'Flipcart', '2024-05-31', '85542.pdf', 'Sent', '2024-05-31 09:52:51', 1, 1, NULL, ''),
(10, 'Pallavi50Ra', '98765', 'TI/24-25/2', 'Sweta Chaudhari', 'sweta.ch8995@gmail.com', '9876545657', 'Flipkart', '2024-06-05', '98765.pdf', 'Sent', '2024-06-05 06:51:40', 1, 1, NULL, ''),
(11, 'Pallavi50Ra', '98765', 'TI/24-25/10', 'Sweta Chaudhari', 'sweta.ch8995@gmail.com', '9876545657', 'Flipkart', '2024-06-07', '98765.pdf', 'Sent', '2024-06-07 10:18:28', 1, 1, NULL, '');

-- --------------------------------------------------------

--
-- Table structure for table `last_message`
--

CREATE TABLE `last_message` (
  `id` bigint(10) NOT NULL,
  `sales_person_id` varchar(110) NOT NULL,
  `unique_id` varchar(20) NOT NULL,
  `fullname` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `number` varchar(20) NOT NULL,
  `company` varchar(110) NOT NULL,
  `message` longtext NOT NULL,
  `requirements` longtext NOT NULL,
  `last_seen` varchar(30) NOT NULL,
  `reminder` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `last_message`
--

INSERT INTO `last_message` (`id`, `sales_person_id`, `unique_id`, `fullname`, `email`, `number`, `company`, `message`, `requirements`, `last_seen`, `reminder`) VALUES
(24, '', '78432', 'Nitesh Chauhan', '', '', '0', '', '', '2024-06-12 14:55:47.000', '0000-00-00 00:00:00'),
(26, 'shakti99ra', '78433', 'Shakti Raghav', '', '', '0', 'Testing at', '7843353241', '2024-06-15 13:31:10.000', '2024-06-21 17:31:00'),
(27, 'shakti99ra', '78436', 'Anant Aarya', '', '', '0', 'Anant has requirements of US Import Data, Call him at 4:40 PM', 'Anant has requirements of US Import Data, Call him at 4:40 PM', '', '0000-00-00 00:00:00'),
(28, 'shakti99ra', '78438', 'Lucky Cippy', '', '', '0', 'Anshuman has messaged again, call him again at 4:20 pm ', 'Anshuman has messaged again, call him again at 4:20 pm ', '2024-05-15 16:18:06.000', '0000-00-00 00:00:00'),
(29, 'pallavi50ra', '78438', 'Anshuman Singh', '', '', '0', 'Anshuman has messaged again, call him again at 4:20 pm ', 'Anshuman has messaged again, call him again at 4:20 pm ', '2024-05-15 16:18:06.000', '0000-00-00 00:00:00'),
(30, 'shakti99ra', '78439', 'Kundan', '', '', '0', 'Kundan has asked about Bangaladesh Import data', '', '', '0000-00-00 00:00:00'),
(31, 'pallavi50ra', '78432', 'Nitesh Chauhan', '', '', '0', '', '', '2024-06-12 14:55:47.000', '0000-00-00 00:00:00'),
(32, 'shakti99ra', '98656', 'Kundan', '', '', '0', 'I\'ll update you about this in next one hour', 'I\'ll update you about this in next one hour', '2024-05-23 13:39:00.000', '2024-05-23 13:39:00'),
(33, 'shakti99ra', '98657', 'Tripti', '', '', '0', 'I\'ve talked with Tripti and discussed about her requirements and the next call with her is scheduled at 3\'o clock', 'I\'ve talked with Tripti and discussed about her requirements and the next call with her is scheduled at 3\'o clock', '2024-05-22 12:33:25.000', '2024-05-22 15:00:00'),
(34, 'shakti99ra', '98654', 'Shakti', '', '', '0', '', '', '2024-05-23 13:35:02.000', '0000-00-00 00:00:00'),
(35, 'shakti99ra', '98657', 'Hritanshu', '', '', '0', 'I\'ve talked with Tripti and discussed about her requirements and the next call with her is scheduled at 3\'o clock', 'I\'ve talked with Tripti and discussed about her requirements and the next call with her is scheduled at 3\'o clock', '2024-05-22 12:33:25.000', '2024-05-22 15:00:00'),
(36, 'shakti99ra', '98657', 'Hritanshu', '', '', '0', 'I\'ve talked with Tripti and discussed about her requirements and the next call with her is scheduled at 3\'o clock', 'I\'ve talked with Tripti and discussed about her requirements and the next call with her is scheduled at 3\'o clock', '2024-05-22 12:33:25.000', '2024-05-22 15:00:00'),
(37, 'pallavi50ra', '85542', 'Prince', '', '', '0', 'Welcome Nitesh', '', '', '2024-05-31 18:48:00'),
(38, '', '95574', 'kundan', '', '', '0', 'khol diya bhai\n', 'khol diya bhai\n', '2024-05-27 17:09:31.000', '2024-05-29 17:09:00'),
(39, 'pallavi50ra', '98643', 'Sweta Singh', 'sweta9090@gmail.com', '9864376347', 'Amazon', 'I\'ve had call with sweta and she told me that she will update me today at 11:40', '', '2024-06-04 11:44:02.000', '0000-00-00 00:00:00'),
(40, 'pallavi50ra', '98765', 'Sweta Chaudhari', 'sweta.ch8995@gmail.com', '9876545657', 'Flipkart', '', 'Sweta has need of electronics Export data of China', '', '0000-00-00 00:00:00'),
(41, 'Pallavi50Ra', '98647', 'Sanjeev Gangwar', 'sanju8990@gmail.com', '9864786432', 'Presidio', 'Us import', 'Us import', '', '2024-06-12 14:52:00'),
(42, 'Pallavi50Ra', '98996', 'HINA', 'hina.thanvi@outlook.com', '9899668769', 'XYZ', 'DATA', 'call done but client said call back at 5pm', '2024-06-12 16:04:28.000', '2024-06-12 17:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `new_lead`
--

CREATE TABLE `new_lead` (
  `id` int(10) NOT NULL,
  `sales_person_id` varchar(110) NOT NULL,
  `unique_id` varchar(50) NOT NULL,
  `fullname` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `number` varchar(50) NOT NULL,
  `company` varchar(110) NOT NULL,
  `requirements` longtext NOT NULL,
  `reminder` datetime NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `invoice_number` varchar(10) NOT NULL,
  `invoice_date` varchar(110) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `new_lead`
--

INSERT INTO `new_lead` (`id`, `sales_person_id`, `unique_id`, `fullname`, `email`, `number`, `company`, `requirements`, `reminder`, `created_at`, `invoice_number`, `invoice_date`) VALUES
(64, 'pallavi50ra', '78432', 'Nitesh Chauhan', 'niteshchauhan8285@gmail.com', '7843253241', 'Tradiemex', 'HI', '0000-00-00 00:00:00', '2024-05-30 06:33:34', 'TI/24-25/1', '2024-05-30'),
(66, 'Shakti99Ra', '78433', 'Shakti Raghav', 'shakti5050@gmail.com', '7843353241', 'Tradiemex', 'Call Shakti on 1:22', '0000-00-00 00:00:00', '2024-05-27 11:48:35', '', ''),
(73, 'pallavi50ra', '78438', 'Anshuman Singh', 'anshu8989@gmail.com', '7843853241', '', 'UAE Import data', '0000-00-00 00:00:00', '2024-05-27 11:48:15', '', ''),
(74, 'Shakti99Ra', '78438', 'Anshuman Singh', 'anshu8989@gmail.com', '7843853241', '', 'UAE Import data', '0000-00-00 00:00:00', '2024-05-27 11:48:33', '', ''),
(75, 'pallavi50ra', '85542', 'Prince', 'nitesh@gmail.com', '8554225521', 'Tradeimex', 'Welcome Nitesh', '2024-05-31 18:48:00', '2024-05-31 09:52:51', 'TI/24-25/3', '2024-05-31'),
(76, 'Shakti99Ra', '95574', 'kundan', 'kundan@gmail.com', '9557425592', 'Tradeimex', 'TEST', '2024-05-29 16:54:00', '2024-05-31 09:44:08', 'TI/24-25/6', '2024-05-31'),
(77, 'Pallavi50Ra', '98643', 'Sweta Singh', 'sweta9090@gmail.com', '9864376347', 'Amazon', 'US-Import', '2024-05-31 16:56:00', '2024-05-31 11:25:00', '', ''),
(79, 'Pallavi50Ra', '98765', 'Sweta Chaudhari', 'sweta.ch8995@gmail.com', '9876545657', 'Flipkart', 'Sweta has need of electronics Export data of China', '2024-06-03 15:00:00', '2024-06-07 10:18:28', 'TI/24-25/1', '2024-06-07'),
(80, 'Pallavi50Ra', '98647', 'Sanjeev Gangwar', 'sanju8990@gmail.com', '9864786432', 'Presidio', 'Us import', '2024-06-12 14:52:00', '2024-06-12 09:21:20', '', ''),
(81, 'Pallavi50Ra', '98996', 'HINA', 'hina.thanvi1506@outlook.com', '9899668769', 'XYZ', 'DATA', '2024-06-12 15:57:00', '2024-06-17 06:52:23', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `pallavi50ra`
--

CREATE TABLE `pallavi50ra` (
  `id` int(11) NOT NULL,
  `unique_id` varchar(55) DEFAULT NULL,
  `fullname` varchar(55) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `number` varchar(20) DEFAULT NULL,
  `company` varchar(100) DEFAULT NULL,
  `requirements` longtext DEFAULT NULL,
  `reminder` datetime DEFAULT NULL,
  `invoice_number` varchar(100) DEFAULT NULL,
  `invoice_date` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pallavi50ra`
--

INSERT INTO `pallavi50ra` (`id`, `unique_id`, `fullname`, `email`, `number`, `company`, `requirements`, `reminder`, `invoice_number`, `invoice_date`, `created_at`) VALUES
(1, '78432', 'Nitesh Chauhan', 'niteshchauhan8285@gmail.com', '7843253241', 'Tradiemex', 'testing', '2024-05-22 12:25:00', NULL, NULL, '2024-05-22 06:55:43'),
(2, '98656', 'Kundan', 'k8990@gmail.com', '9865665243', 'Tradiemex', 'US-import', '2024-05-22 12:29:00', NULL, NULL, '2024-05-22 06:59:35'),
(3, '98657', 'Tripti', 'tripti4230@gmail.com', '9865765243', 'Tradiemex', 'US Import data', '2024-05-22 13:30:00', NULL, NULL, '2024-05-22 07:00:15');

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `id` int(10) NOT NULL,
  `sales_person_id` varchar(20) NOT NULL,
  `client_id` int(20) NOT NULL,
  `amount` decimal(20,0) NOT NULL,
  `sales_date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id`, `sales_person_id`, `client_id`, `amount`, `sales_date`) VALUES
(1, 'Pallavi50Ra', 98765, 1477, '2024-06-07'),
(2, 'Pallavi50Ra', 98765, 10620, '2024-06-07');

-- --------------------------------------------------------

--
-- Table structure for table `sales_team`
--

CREATE TABLE `sales_team` (
  `id` int(10) NOT NULL,
  `sales_person_id` varchar(20) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sales_team`
--

INSERT INTO `sales_team` (`id`, `sales_person_id`, `first_name`, `last_name`, `email`, `password`, `created_at`) VALUES
(7, 'Pallavi50Ra', 'Pallavi', 'Rawat', 'pallavi.rawat2000@gmail.com', '12345678', '2024-05-21 10:24:51'),
(8, 'Shakti99Ra', 'Shakti', 'Raghav', 'shakti5050@gmail.com', '123456789', '2024-05-27 09:42:33'),
(9, 'Shakti75Ra', 'Shakti', 'Raghav', 'nitesh@gmail.com', 'Shakti@12345', '2024-06-13 12:20:16');

-- --------------------------------------------------------

--
-- Table structure for table `sent_data`
--

CREATE TABLE `sent_data` (
  `id` int(110) NOT NULL,
  `sales_person_id` varchar(250) NOT NULL,
  `unique_id` varchar(250) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `month` varchar(255) NOT NULL,
  `message` varchar(250) NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sent_data`
--

INSERT INTO `sent_data` (`id`, `sales_person_id`, `unique_id`, `fullname`, `month`, `message`, `created_at`) VALUES
(3, 'Pallavi50Ra', '78432', 'Nitesh Chauhan', 'January', 'Database Sent Of jan', '2024-06-11'),
(4, 'Pallavi50Ra', '78432', 'Nitesh Chauhan', 'February', 'Database Sent Of February', '2024-06-11'),
(5, 'Pallavi50Ra', '98643', 'Sweta Singh', 'January', 'Database Sent Of january', '2024-06-12'),
(6, 'Pallavi50Ra', '98643', 'Sweta Singh', 'February', 'Database Sent Of February', '2024-06-12');

-- --------------------------------------------------------

--
-- Table structure for table `shakti99ra`
--

CREATE TABLE `shakti99ra` (
  `id` int(11) NOT NULL,
  `unique_id` varchar(55) DEFAULT NULL,
  `fullname` varchar(55) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `number` varchar(20) DEFAULT NULL,
  `company` varchar(100) DEFAULT NULL,
  `requirements` longtext DEFAULT NULL,
  `reminder` datetime DEFAULT NULL,
  `invoice_number` varchar(20) DEFAULT NULL,
  `invoice_date` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shakti99ra`
--

INSERT INTO `shakti99ra` (`id`, `unique_id`, `fullname`, `email`, `number`, `company`, `requirements`, `reminder`, `invoice_number`, `invoice_date`, `created_at`) VALUES
(2, '98657', 'Hritanshu', 'hritu706@gmail.com', '9865789880', 'Tradiemex', 'test', '2024-05-28 15:31:00', NULL, NULL, '2024-05-27 10:01:39');

-- --------------------------------------------------------

--
-- Table structure for table `successful_lead`
--

CREATE TABLE `successful_lead` (
  `id` int(11) NOT NULL,
  `sales_person_id` varchar(110) NOT NULL,
  `unique_id` varchar(11) NOT NULL,
  `fullname` varchar(40) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `status` varchar(100) NOT NULL,
  `file_status` varchar(110) NOT NULL,
  `invoice_number` varchar(110) NOT NULL,
  `invoice_date` date DEFAULT NULL,
  `amount` varchar(110) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `successful_lead`
--

INSERT INTO `successful_lead` (`id`, `sales_person_id`, `unique_id`, `fullname`, `email`, `phone`, `status`, `file_status`, `invoice_number`, `invoice_date`, `amount`) VALUES
(23, '', '78438', 'Lucky Cippy', 'lucky68@gmail.com', '7843853241', '', '0', '', NULL, ''),
(24, 'Shakti99Ra', '95574', 'kundan', 'kundan@gmail.com', '9557425592', 'Success', '', 'TI/24-25/2', '2024-05-27', '5000'),
(25, 'Pallavi50Ra', '78432', 'Nitesh Chauhan', 'niteshchauhan8285@gmail.com', '7843253241', 'Success', '', 'TI/24-25/1234', '2024-05-30', '8000'),
(26, 'Pallavi50Ra', '98643', 'Sweta Singh', 'sweta9090@gmail.com', '9864376347', 'Success', '', '', '0000-00-00', '1477.36'),
(27, 'Pallavi50Ra', '98765', 'Sweta Chaudhari', 'sweta.ch8995@gmail.com', '9876545657', 'Success', '', 'TI/24-25/2', '2024-06-05', '1477.36'),
(28, 'Pallavi50Ra', '98765', 'Sweta Chaudhari', 'sweta.ch8995@gmail.com', '9876545657', 'Success', '', 'TI/24-25/2', '2024-06-05', '1477.36'),
(29, 'Pallavi50Ra', '98765', 'Sweta Chaudhari', 'sweta.ch8995@gmail.com', '9876545657', 'Success', '', 'TI/24-25/2', '2024-06-05', '1477.36'),
(30, 'Pallavi50Ra', '98765', 'Sweta Chaudhari', 'sweta.ch8995@gmail.com', '9876545657', 'Success', '', 'TI/24-25/2', '2024-06-05', '1477.36'),
(31, 'Pallavi50Ra', '98765', 'Sweta Chaudhari', 'sweta.ch8995@gmail.com', '9876545657', 'Success', '', 'TI/24-25/2', '2024-06-05', '1477.36'),
(32, 'Pallavi50Ra', '98765', 'Sweta Chaudhari', 'sweta.ch8995@gmail.com', '9876545657', 'Success', '', 'TI/24-25/1', '2024-06-07', '10620');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `78432`
--
ALTER TABLE `78432`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `78433`
--
ALTER TABLE `78433`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `78436`
--
ALTER TABLE `78436`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `78438`
--
ALTER TABLE `78438`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `78439`
--
ALTER TABLE `78439`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `85542`
--
ALTER TABLE `85542`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `95574`
--
ALTER TABLE `95574`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `98643`
--
ALTER TABLE `98643`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `98647`
--
ALTER TABLE `98647`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `98654`
--
ALTER TABLE `98654`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `98656`
--
ALTER TABLE `98656`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `98657`
--
ALTER TABLE `98657`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `98765`
--
ALTER TABLE `98765`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `98996`
--
ALTER TABLE `98996`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `closed_leads`
--
ALTER TABLE `closed_leads`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `last_message`
--
ALTER TABLE `last_message`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `new_lead`
--
ALTER TABLE `new_lead`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pallavi50ra`
--
ALTER TABLE `pallavi50ra`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales_team`
--
ALTER TABLE `sales_team`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sent_data`
--
ALTER TABLE `sent_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shakti99ra`
--
ALTER TABLE `shakti99ra`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `successful_lead`
--
ALTER TABLE `successful_lead`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `78432`
--
ALTER TABLE `78432`
  MODIFY `uid` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `78433`
--
ALTER TABLE `78433`
  MODIFY `uid` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `78436`
--
ALTER TABLE `78436`
  MODIFY `uid` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `78438`
--
ALTER TABLE `78438`
  MODIFY `uid` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `78439`
--
ALTER TABLE `78439`
  MODIFY `uid` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `85542`
--
ALTER TABLE `85542`
  MODIFY `uid` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `95574`
--
ALTER TABLE `95574`
  MODIFY `uid` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `98643`
--
ALTER TABLE `98643`
  MODIFY `uid` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `98647`
--
ALTER TABLE `98647`
  MODIFY `uid` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `98654`
--
ALTER TABLE `98654`
  MODIFY `uid` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `98656`
--
ALTER TABLE `98656`
  MODIFY `uid` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `98657`
--
ALTER TABLE `98657`
  MODIFY `uid` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `98765`
--
ALTER TABLE `98765`
  MODIFY `uid` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `98996`
--
ALTER TABLE `98996`
  MODIFY `uid` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `closed_leads`
--
ALTER TABLE `closed_leads`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `last_message`
--
ALTER TABLE `last_message`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `new_lead`
--
ALTER TABLE `new_lead`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `pallavi50ra`
--
ALTER TABLE `pallavi50ra`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sales_team`
--
ALTER TABLE `sales_team`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `sent_data`
--
ALTER TABLE `sent_data`
  MODIFY `id` int(110) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `shakti99ra`
--
ALTER TABLE `shakti99ra`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `successful_lead`
--
ALTER TABLE `successful_lead`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
