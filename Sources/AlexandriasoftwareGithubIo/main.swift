import Foundation
import Publish
import Plot

// This type acts as the configuration for your website.
struct AlexandriasoftwareGithubIo: Website {
    enum SectionID: String, WebsiteSectionID {
        case doing_time
        case hola
        case posts
    }

    struct ItemMetadata: WebsiteItemMetadata {
        // Add any site-specific metadata that you want to use here.
    }

    // Update these properties to configure your website:
    var url = URL(string: "https://alexandriasoftware.github.io")!
    var name = "Alexandria Software"
    var description = "Randall Wood, an independent software developer, does business as Alexandria Software."
    var language: Language { .english }
    var imagePath: Path? { nil }
}

// This will generate your website using the built-in Foundation theme:
try AlexandriasoftwareGithubIo().publish(withTheme: .foundation)
