"use client";
import { AspectRatio, HStack, VStack } from "../../styled-system/jsx";
import { css } from "@/styled-system/css";
import { Heading, ScrollArea, Text } from "@radix-ui/themes";
import Image from "next/image";
import { Navbar } from "./(components)/Navbar";


export default function () {
    return (
        <ScrollArea
            scrollbars='vertical'
            className={css({
                maxH: 'screen',
                maxW: 'screen',
                overflow: 'hidden',
            })}
        >
            <VStack w='screen' h='screen' justify='start' bg='white'>
                <VStack
                    w='full'
                    h='full'
                    justify='start'
                    bg='blue'
                >
                    <Navbar />
                    <VStack h='101vh'>

                    </VStack>
                </VStack>
            </VStack>
        </ScrollArea>
    )
}