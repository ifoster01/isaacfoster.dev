import { HStack } from "@/styled-system/jsx";
import { Button, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Navbar() {
  const [showNav, setShowNav] = useState<boolean>(false)

  useEffect(() => {
    const top10PercentThreshold = window.innerHeight * 0.1;

    const mousePosition = (e: MouseEvent) => {
      const mouseY = e.clientY

      if (mouseY <= 34) {
        console.log('on nav')
      }
    }

    const trackScroll = () => {
      const scrollY = window.scrollY
      console.log('here')

      if (scrollY > 34) {
        console.log('nav hidden')
      }
    }

    // adding event listener for mouse movement
    document.addEventListener('mousemove', mousePosition)
    document.addEventListener('scroll', trackScroll)

    // cleanup
    return () => {
      document.removeEventListener('mousemove', mousePosition)
      document.removeEventListener('scroll', trackScroll)
    }
  }, [])

  return (
    <HStack
      w='screen'
      minH='fit-content'
      bg='gray'
    >
      <Image src={""} alt={"Profile"} />
      <Button
        style={{
          transition: 'background 0.2s ease-in-out'
        }}
      >
        Home
      </Button>
      <Text>
        Projects
      </Text>
      <Text>
        Resume
      </Text>
      <Text>
        Contact
      </Text>
    </HStack>
  )
}