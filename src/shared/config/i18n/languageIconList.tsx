import type { FunctionComponent, SVGProps } from "react";
import type { supportedLngs } from "./i18n";
import EnglishIcon from '../../../shared/assets/icons/English.svg?react'
import GermanyIcon from '../../../shared/assets/icons/Vietnam.svg?react'

export type SupportedLgnsType = (typeof supportedLngs)[number]

type LanguageIconListType = Record<SupportedLgnsType, FunctionComponent<SVGProps<SVGSVGElement>>>

export const languageIconList: LanguageIconListType = {
    en: EnglishIcon,
    vn: GermanyIcon
}