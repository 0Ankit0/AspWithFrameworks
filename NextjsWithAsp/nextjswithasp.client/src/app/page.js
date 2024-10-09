"use client";
import React, { useState } from 'react';
import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Checkbox from "@/components/Checkbox";
import Modal from "@/components/Modal";
import Card from "@/components/Card";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Welcome to My App" subtitle="This is a subtitle" />
      <Container className="flex-grow">
        <Section title="Main Section">
          <Card title="Interactive Elements">
            <Button tooltip={"Welcome"} onClick={() => setModalOpen(true)}>Open Modal</Button>
          </Card>
        </Section>

        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Interactive Elements">
          <Input placeholder="Enter text" className="mt-4" />
          <Select
            className="mt-4"
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' }
            ]}
          />
          <Checkbox label="Accept terms" className="mt-4" />
        </Modal>

        <Section title="Additional Information">
          <Card title="Card Title">
            <p>This is a card content.</p>
          </Card>
        </Section>
      </Container>
      <Footer>
        <p>&copy; 2023 My App. All rights reserved.</p>
      </Footer>
    </div>
  );
}
