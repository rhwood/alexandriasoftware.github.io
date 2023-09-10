// swift-tools-version:5.5

import PackageDescription

let package = Package(
    name: "AlexandriasoftwareGithubIo",
    platforms: [.macOS(.v12)],
    products: [
        .executable(
            name: "AlexandriasoftwareGithubIo",
            targets: ["AlexandriasoftwareGithubIo"]
        )
    ],
    dependencies: [
        .package(name: "Publish", url: "https://github.com/johnsundell/publish.git", from: "0.8.0")
    ],
    targets: [
        .executableTarget(
            name: "AlexandriasoftwareGithubIo",
            dependencies: ["Publish"]
        )
    ]
)