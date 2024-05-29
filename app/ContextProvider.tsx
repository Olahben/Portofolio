"use client"
import React, { useEffect, useState } from 'react'
import AOS from "aos"
import { Inter } from "next/font/google"

interface props {
    children: React.ReactNode;
}

export default function ContextProvider({ children }: Readonly<props>) {
    useEffect(() => {
        AOS.init();
    }, []);

    return <>{children}</>
}