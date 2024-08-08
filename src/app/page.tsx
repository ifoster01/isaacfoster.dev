import { AspectRatio, VStack } from "../../styled-system/jsx";
import { css } from "@/styled-system/css";
import { Heading } from "@radix-ui/themes";
import Image from "next/image";


export default function () {
    return (
        <VStack w='screen' h='screen' justify='center'>
            <AspectRatio ratio={70 / 51} w='200px'>
                <Image src={`/thinair.square.dark.svg`} alt='thinair-logo' fill={true} priority />
            </AspectRatio>
        </VStack>
    )
}