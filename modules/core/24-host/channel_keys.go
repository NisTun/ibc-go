package host

import "fmt"

const (
	KeyChannelEndPrefix     = "channelEnds"
	KeyChannelPrefix        = "channels"
	KeyChannelUpgradePrefix = "channelUpgrades"
	KeyUpgradePrefix        = "upgrades"
	KeyUpgradeErrorPrefix   = "upgradeError"
	KeyCounterpartyUpgrade  = "counterpartyUpgrade"
)

// ICS04
// The following paths are the keys to the store as defined in https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#store-paths

// ChannelKey returns the store key for a particular channel
func ChannelKey(portID, channelID string) []byte {
	return []byte(fmt.Sprintf("%s/%s", KeyChannelEndPrefix, channelPath(portID, channelID)))
}

// ChannelUpgradeErrorKey returns the store key for a particular channelEnd used to stor the ErrorReceipt in the case that a chain does not accept the proposed upgrade
func ChannelUpgradeErrorKey(portID, channelID string) []byte {
	return []byte(fmt.Sprintf("%s/%s/%s", KeyChannelUpgradePrefix, KeyUpgradeErrorPrefix, channelPath(portID, channelID)))
}

// ChannelUpgradeKey returns the store key for a particular channel upgrade attempt
func ChannelUpgradeKey(portID, channelID string) []byte {
	return []byte(fmt.Sprintf("%s/%s/%s", KeyChannelUpgradePrefix, KeyUpgradePrefix, channelPath(portID, channelID)))
}

// ChannelCounterpartyUpgradeKey returns the store key for the upgrade used on the counterparty channel.
func ChannelCounterpartyUpgradeKey(portID, channelID string) []byte {
	return []byte(fmt.Sprintf("%s/%s/%s", KeyChannelUpgradePrefix, KeyCounterpartyUpgrade, channelPath(portID, channelID)))
}

func channelPath(portID, channelID string) string {
	return fmt.Sprintf("%s/%s/%s/%s", KeyPortPrefix, portID, KeyChannelPrefix, channelID)
}
