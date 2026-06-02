/*
  # Create Appointments Table

  1. New Tables
    - `appointments`
      - `id` (uuid, primary key)
      - `name` (text, patient name)
      - `email` (text, patient email)
      - `phone` (text, patient phone number)
      - `preferred_date` (date, requested appointment date)
      - `preferred_time` (text, requested appointment time)
      - `service` (text, requested service type)
      - `message` (text, optional additional notes)
      - `status` (text, appointment status - defaults to 'pending')
      - `created_at` (timestamptz, record creation timestamp)

  2. Security
    - Enable RLS on `appointments` table
    - Add policy for anonymous users to insert appointments (public booking form)
    - Add policy for authenticated users to read all appointments (clinic staff)

  3. Notes
    - The booking form is public-facing, so anonymous inserts are allowed
    - Only authenticated clinic staff can view/manage appointments
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  service text NOT NULL DEFAULT '',
  message text DEFAULT '',
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an appointment request"
  ON appointments
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated staff can view appointments"
  ON appointments
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated staff can update appointments"
  ON appointments
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated staff can delete appointments"
  ON appointments
  FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);